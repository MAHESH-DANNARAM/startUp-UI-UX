from flask import Flask, Blueprint, jsonify, send_file, request
from audiocraft.models import musicgen
import torch
from flask_cors import CORS

# !python3 -m pip install -U git+https://github.com/facebookresearch/audiocraft#egg=audiocraft

app = Flask(__name__)
CORS(app)

# Load the music generation model
model = musicgen.MusicGen.get_pretrained('large',
                                        #   device='cuda'
                                          )

# Create a Flask blueprint
music_gen_bp = Blueprint('music_gen_bp', __name__)

@music_gen_bp.route('/generate_music', methods=['POST'])
def generate_music():
    data = request.get_json()  # Receive the input data from the client
    if not data or 'prompts' not in data or 'duration' not in data:
        return jsonify({'error': 'Invalid request. Please provide prompts and duration.'}), 400

    prompts = data['prompts']
    duration = int(data['duration'])

    # Set the duration for music generation
    model.set_generation_params(duration=duration)

    # Generate the audio using the model
    res = model.generate(prompts, progress=True)

    # Save the generated audio to a temporary file
    audio_path = '/path/to/temp_audio.wav'
    res.save(audio_path, 32000)

    return send_file(audio_path, as_attachment=True, attachment_filename='generated_audio.wav')

app.register_blueprint(music_gen_bp, url_prefix='/api/music_gen')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
