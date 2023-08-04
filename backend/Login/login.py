from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user, login_required, logout_user
from ..app import User  # Import your User model
from flask_sqlalchemy import SQLAlchemy

auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()
db = SQLAlchemy()

def init_auth(app):
    bcrypt.init_app(app)
    db.init_app(app)
    login_manager = LoginManager(app)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    app.register_blueprint(auth_bp)

@auth_bp.route('/login', methods=['POST'])
def api_login():
    data = request.json  # Assuming the client sends JSON data with 'username' and 'password' fields

    if not data or 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Invalid data'}), 400

    user = User.query.filter_by(username=data['username']).first()

    if user and bcrypt.check_password_hash(user.password, data['password']):
        login_user(user)
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@auth_bp.route('/dashboard', methods=['GET'])
@login_required
def api_dashboard():
    return jsonify({'message': 'Dashboard data goes here'}), 200

@auth_bp.route('/logout', methods=['POST'])
@login_required
def api_logout():
    logout_user()
    return jsonify({'message': 'Logout successful'}), 200

@auth_bp.route('/register', methods=['POST'])
def api_register():
    data = request.json  # Assuming the client sends JSON data with 'username' and 'password' fields

    if not data or 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Invalid data'}), 400

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Registration successful'}), 201
