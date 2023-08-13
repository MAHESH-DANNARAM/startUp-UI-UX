from flask import Blueprint, request, jsonify
from Common.Common import common_bp 

youtube_bp = Blueprint('youtube', __name__)

@youtube_bp.route('/download', methods=['POST'])
def download_video():
    data = request.json
    youtube_url = data.get('youtube_url')
    if not youtube_url:
        return jsonify({'error': 'Please provide a YouTube URL'}), 400
    
    output_file = 'Video.mp4'

    # Run yt-dlp command to download the video
    command = [
        'yt-dlp',
        '-f', 'mp4',
        '--force-overwrites',
        '--no-warnings',
        '--ignore-no-formats-error',
        '--restrict-filenames',
        '-o', output_file,
        youtube_url
    ]
    subprocess.run(command, capture_output=True, text=True)

    return jsonify({'message': 'Video downloaded successfully', 'output_file': output_file})
