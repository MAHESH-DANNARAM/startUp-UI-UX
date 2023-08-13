from flask import Blueprint, request, jsonify
from models import db, User

bp = Blueprint('user_bp', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    first_name = data['first_name']
    last_name = data['last_name']
    username = data['username']
    phone_number = data['phone_number']
    email = data['email']
    password = data['password']

    new_user = User(
        first_name=first_name,
        last_name=last_name,
        username=username,
        phone_number=phone_number,
        email=email,
        password=password
    )

    db.session.add(new_user)
    db.session.commit()

    response = {
        'message': 'Registration successful!',
        'user_id': new_user.id
    }

    return jsonify(response), 201
