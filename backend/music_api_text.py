import requests

prompts = [
    'crazy EDM, heavy bang',
    'classic reggae track with an electronic guitar solo',
    'lofi slow bpm electro chill with organic samples',
    'rock with saturated guitars, a heavy bass line and crazy drum break and fills.',
    'earthy tones, environmentally conscious, ukulele-infused, harmonic, breezy, easygoing, organic instrumentation, gentle grooves',
    'pirates of the caribbean'
]

duration = 60  # The desired duration in seconds

data = {'prompts': prompts, 'duration': duration}

response = requests.post('http://localhost:5000/api/music_gen/generate_music', json=data)

if response.status_code == 200:
    with open('generated_audio.wav', 'wb') as f:
        f.write(response.content)
else:
    print('Error:', response.json()['error'])
