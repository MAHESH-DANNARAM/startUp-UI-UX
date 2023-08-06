from flask import Flask
from Credits.Creditsassign import credit_bp
from text_chart.chart import pie_chart_blueprint
from Login.models import db
from Login.login import users_bp
# from text_music.music import music_gen_bp
# from text_images.image_genration import diffuser_blueprint


app = Flask(__name__)

# Register the blueprint with the app
# app.register_blueprint(pie_chart_blueprint)
# app.register_blueprint(music_gen_bp, url_prefix='/api/music_gen')
# app.register_blueprint(diffuser_blueprint, url_prefix='/api/image_genration')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # Replace with your database URI


if __name__ == '__main__':
    app.run(debug=True)
