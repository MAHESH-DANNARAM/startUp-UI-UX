from flask import Flask
# from Transcript.Youtube_sub import mp4_sub_bp
# from Credits.Creditsassign import credit_bp
# from text_chart.chart import pie_chart_blueprint
# from text_music.music import music_gen_bp
# from text_images.image_genration import diffuser_blueprint
from Login.models import db  # Assuming your SQLAlchemy db instance is defined in 'models.py'
from Login.login import registration_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://username:password@server_name/db_name?driver=SQL+Server'
db.init_app(app)

# Register the blueprint with the app
# app.register_blueprint(pie_chart_blueprint)
# app.register_blueprint(music_gen_bp, url_prefix='/api/music_gen')
# app.register_blueprint(diffuser_blueprint, url_prefix='/api/image_genration')
# app.register_blueprint(credit_bp, url_prefix='/api')
# app.register_blueprint(mp4_sub_bp, url_prefix='/api')
app.register_blueprint(registration_bp, url_prefix='/api')


if __name__ == '__main__':
    app.run(debug=True)
