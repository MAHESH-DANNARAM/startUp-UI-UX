from flask import Blueprint, request, jsonify
from Common.Common import video2mp3,translate_to_en,translate_vtt
import subprocess

video_downloader_bp = Blueprint('video_downloader', __name__)

@video_downloader_bp.route('/download', methods=['POST'])
def download_video():
    data = request.get_json()
    
    if 'youtube_url' not in data:
        return jsonify({'error': 'Missing youtube_url parameter'}), 400
    
    youtube_url = data['youtube_url']
    output_file = 'Video.mp4'
    
    # Run yt-dlp command using subprocess
    command = [
        'yt-dlp', '-f', 'mp4', '--force-overwrites', '--no-warnings',
        '--ignore-no-formats-error', '--restrict-filenames', '-o', output_file,
        youtube_url
    ]
    
    try:
        subprocess.run(command, check=True)
        return jsonify({'message': 'Download successful'}), 200
    except subprocess.CalledProcessError:
        return jsonify({'error': 'Download failed'}), 500
