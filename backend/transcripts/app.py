from flask import Flask, request, jsonify
import speech_recognition as sr
from pydub import AudioSegment

app = Flask(__name__)

def audio_to_text(audio_file):
    r = sr.Recognizer()

    # Load audio file
    sound = AudioSegment.from_file(audio_file, format="mp3")
    chunk_duration = 10 * 1000  # Chunk duration in milliseconds (e.g., 10 seconds)
    chunks = sound[::chunk_duration]

    transcription = ""
    for i, chunk in enumerate(chunks):
        # Export chunk to temporary WAV file
        chunk.export(f"temp_chunk_{i}.wav", format="wav")

        # Convert WAV to text
        with sr.AudioFile(f"temp_chunk_{i}.wav") as source:
            audio = r.record(source)  # Read the entire audio file

        try:
            # Use Google Speech Recognition
            text = r.recognize_google(audio)
            transcription += text + " "
        except sr.UnknownValueError:
            print(f"Google Speech Recognition could not understand chunk {i}")
        except sr.RequestError as e:
            print(f"Could not request results from Google Speech Recognition service for chunk {i}; {e}")

    return transcription.strip()


@app.route("/transcribe", methods=["POST"])
def transcribe_audio():
    audio_file = request.files.get("audio")
    if not audio_file:
        return jsonify({"error": "No audio file received"})

    audio_file.save("audio.mp3")

    try:
        text = audio_to_text("audio.mp3")
        return jsonify({"transcription": text})
    except Exception as e:
        return jsonify({"error": str(e)})





if __name__ == "__main__":
    app.run(debug=True)
