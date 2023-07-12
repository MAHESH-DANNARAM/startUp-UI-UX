from flask import Flask
from filecall.transcript import home_bp
from filecall.contact import contact_bp

app = Flask(__name__)

app.register_blueprint(home_bp)
app.register_blueprint(contact_bp)

if __name__ == '__main__':
    app.run()
