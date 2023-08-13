from flask import Blueprint, request, jsonify

login_bp = Blueprint('login_bp', __name__)

@login_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data['username']
    password = data['password']

    # Perform login authentication logic here
    # You can query the database and check if the user's credentials are valid
    # For demonstration purposes, let's assume successful login
    if username == 'demo_user' and password == 'password123':
        response = {
            'message': 'Login successful!',
            'user_id': 123  # Replace with actual user ID
        }
        return jsonify(response), 200
    else:
        response = {
            'message': 'Invalid credentials. Login failed.'
        }
        return jsonify(response), 401
