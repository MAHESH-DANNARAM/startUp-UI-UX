from flask import Blueprint, request

# Create the blueprint
credit_bp = Blueprint('credit_api', __name__)

# Modify the get_db_connection function as before
import pyodbc

def get_db_connection():
    conn = pyodbc.connect('Driver={SQL Server};'
                          'Server=your_server_name;'
                          'Database=your_database_name;'
                          'uid=your_username;'
                          'pwd=your_password')
    return conn

@credit_bp.route('/credit', methods=['POST'])
def add_credit():
    data = request.get_json()
    email = data.get('email')
    credits_to_add = int(data.get('credits', 0))

    if not email or credits_to_add <= 0:
        return {'message': 'Invalid data'}, 400

    conn = get_db_connection()
    cursor = conn.cursor()

    # Check if the user with the given email exists
    cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
    user = cursor.fetchone()

    if not user:
        return {'message': 'User not found'}, 404

    # Update user credits
    new_credits = user.credits + credits_to_add
    cursor.execute('UPDATE users SET credits = ? WHERE email = ?', (new_credits, email))
    conn.commit()

    conn.close()

    return {'message': 'Credits added successfully', 'credits': new_credits}, 200
