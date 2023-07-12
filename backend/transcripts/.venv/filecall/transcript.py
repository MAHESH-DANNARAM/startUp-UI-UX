from flask import Flask, Blueprint, render_template, request, send_file
import gradio as gr 
import os
import sys
import subprocess
from os.path import exists as path_exists
from pathlib import Path
from whisper.utils import get_writer
from deep_translator import GoogleTranslator
from IPython.display import HTML
from base64 import b64encode
from IPython.display import Audio
import whisper

# Create a Flask application
app = Flask(__name__)

# Create a Flask Blueprint
video_translation_blueprint = Blueprint('video_translation', __name__)

@video_translation_blueprint.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@video_translation_blueprint.route('/translate', methods=['POST'])
def translate_video():
    # Get the YouTube URL and other parameters from the request
    youtube_url = request.form.get('youtube_url')
    TARGET_LANG_CODE = request.form.get('target_lang_code')
    MODEL_SIZE = ('large')
    SUBTITLE_TYPE = request.form.get('subtitle_type')

    # Set up Whisper model
    model = whisper.load_model(MODEL_SIZE)

    # Define function to convert video to MP3
    def video2mp3(video_file, output_ext="mp3"):
        # Convert to mp3
        filename, ext = os.path.splitext(video_file)
        subprocess.call(["ffmpeg", "-y", "-i", video_file, f"{filename}.{output_ext}"], 
                        stdout=subprocess.DEVNULL,
                        stderr=subprocess.STDOUT)
        return f"{filename}.{output_ext}"

    # Define function to translate audio to English
    def translate_to_en(audio_file):
        # Translate to English
        options = dict(beam_size=5, best_of=5)
        translate_options = dict(task="translate", **options)
        result = model.transcribe(audio_file, **translate_options)
        return result

    # Define function to translate VTT subtitles
    def translate_vtt(target, file_subs):
        translator = GoogleTranslator(source='auto', target=target)
      
        with open(os.path.join('.', file_subs), "r+") as file:
            lines = file.readlines()
            for i, line in enumerate(lines):
                if i % 3 == 0 and line.strip() != 'WEBVTT':
                    # Translate the line
                    translated_line = translator.translate(line.strip())
                    # Replace
                    lines[i] = translated_line + '\n'
                    print(lines[i])
            file.seek(0)
            file.writelines(lines)

    # Define function to generate subtitles
    def generate_subtitles(audio_file, target_lang_code, subtitle_type):
        # Translate transcription to English
        result_en = translate_to_en(audio_file)

        # Make subtitles
        options = {
            "max_line_width": 12,
            "max_line_count": 1,
            "highlight_words": 12
        }
        output_writer = get_writer(subtitle_type, '.')
        output_writer(result_en, 'subtitles_en', options)
        subtitles_ = f'subtitles_en.{subtitle_type}'

        # Translate subtitles
        if target_lang_code != 'en' and subtitle_type[:-4] != '.srt':
            try:
                translate_vtt(target_lang_code, subtitles_)
            except:
                print(f'Invalid TARGET_LANG_CODE: {target_lang_code}. or use subtitle type vtt. Generating subtitles in English')
        else:
            print('Generating subtitles in English')

        return subtitles_

    # Perform video translation
    def perform_translation(youtube_url, target_lang_code, model_size, subtitle_type):
        # Output file
        output_file = 'Video.mp4'

        # Download video using yt-dlp
        subprocess.call(["yt-dlp", "-f", "mp4", "--force-overwrites", "--no-warnings", "--ignore-no-formats-error",
                         "--restrict-filenames", "-o", output_file, youtube_url])

        # Audio file
        audio_file = video2mp3(output_file)

        # Translate subtitles
        subtitles = generate_subtitles(audio_file, target_lang_code, subtitle_type)

        # Output video with subtitles
        output_video = output_file[:-4] + "_subtitled.mp4"
        os.system(f"ffmpeg -i {output_file} -vf subtitles={subtitles} {output_video} -y")

        return output_video

    # Run the video translation process
    translated_video = perform_translation(youtube_url, TARGET_LANG_CODE, MODEL_SIZE, SUBTITLE_TYPE)

    # Read the translated video file
    video_data = open(translated_video, 'rb').read()
    video_base64 = b64encode(video_data).decode()

    # Generate the data URL for the video
    data_url = "data:video/mp4;base64," + video_base64

    return render_template('result.html', video_url=data_url)

# Register the Blueprint with your Flask app
app.register_blueprint(video_translation_blueprint)

# Error handling
@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html'), 404

# Run the Flask app
if __name__ == '__main__':
    app.run()
