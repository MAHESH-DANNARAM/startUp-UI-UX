import os
import subprocess
from flask import Blueprint, request, jsonify
from Common.Common import video2mp3,translate_to_en,translate_vtt

mp4_sub_bp = Blueprint('mp4_sub', __name__)

def video2mp3(video_file, output_ext="mp3"):
    # convert to mp3
    filename, ext = os.path.splitext(video_file)
    subprocess.call(["ffmpeg", "-y", "-i", video_file, f"{filename}.{output_ext}"],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.STDOUT)
    return f"{filename}.{output_ext}"

@mp4_sub_bp.route('/convert', methods=['POST'])
def convert_and_generate_subtitles():
    data = request.get_json()

    youtube_url = data['youtube_url']
    TARGET_LANG_CODE = data['target_lang_code']
    SUBTITLE_TYPE = data['subtitle_type']

    OutputFile = 'Video.mp4'
    command = [
        'yt-dlp', '-f', 'mp4', '--force-overwrites', '--no-warnings',
        '--ignore-no-formats-error', '--restrict-filenames', '-o', OutputFile,
        youtube_url
    ]
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError:
        return jsonify({'error': 'Video download failed'}), 500

    audio_file = video2mp3(OutputFile)
    # Translate transcription to en (replace with your actual translation function)
    result_en = translate_to_en(audio_file)

    # Make subtitles
    options = {
        "max_line_width": 12,
        "max_line_count": 1,
        "highlight_words": 12
    }
    output_writer = get_writer(SUBTITLE_TYPE, '.')  # "/content"
    output_writer(result_en, 'subtitles_en', options)
    subtitles_ = f'subtitles_en.{SUBTITLE_TYPE}'

    # Translate subtitles
    if TARGET_LANG_CODE != 'en' and subtitles_[:-4] != '.srt':
        try:
            translate_vtt(TARGET_LANG_CODE, subtitles_)
        except:
            print(f'Invalid TARGET_LANG_CODE: {TARGET_LANG_CODE}. Generating subtitles in English')
    else:
        print('Generating subtitles in English')

    # Return the result as a JSON response
    return jsonify({'message': 'Subtitles generated successfully'}), 200
