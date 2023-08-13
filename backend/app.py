from flask import Flask
from Transcript.Youtube_Mp4 import youtube_bp
# from Credits.Creditsassign import credit_bp
# from text_chart.chart import pie_chart_blueprint
# from text_music.music import music_gen_bp
# from text_images.image_genration import diffuser_blueprint

app = Flask(__name__)


# Register the blueprint with the app
# app.register_blueprint(pie_chart_blueprint)
# app.register_blueprint(music_gen_bp, url_prefix='/api/music_gen')
# app.register_blueprint(diffuser_blueprint, url_prefix='/api/image_genration')
# app.register_blueprint(credit_bp, url_prefix='/api')
app.register_blueprint(youtube_bp, url_prefix='/youtube')


if __name__ == '__main__':
    app.run(debug=True)
