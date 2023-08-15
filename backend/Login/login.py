from flask import Blueprint, request, jsonify
from .models import db, User  # Assuming your SQLAlchemy models are defined in 'models.py'

registration_bp = Blueprint('registration', __name__)

@registration_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    first_name = data.get('first_name')
    last_name = data.get('last_name')
    username = data.get('username')
    phone_number = data.get('phone_number')
    email = data.get('email')

    if not all([first_name, last_name, username, phone_number, email]):
        return jsonify({"error": "All fields are required"}), 400

    new_user = User(first_name=first_name, last_name=last_name, username=username, phone_number=phone_number, email=email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registration successful"}), 201
