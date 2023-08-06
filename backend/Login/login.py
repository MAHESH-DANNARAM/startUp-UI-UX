from flask import Blueprint, request, jsonify
from models import db, User

users_bp = Blueprint('users', __name__)

@users_bp.route('/register', methods=['POST'])
def register_user():
    data = request.json
    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        phone_number=data['phone_number'],
        email=data['email'],
        password=data['password']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201
