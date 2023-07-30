from flask import Blueprint, request, jsonify
import openai
from flask_cors import CORS

# Create the Flask Blueprint instance
pie_chart_blueprint = Blueprint('pie_chart_blueprint', __name__)
CORS(pie_chart_blueprint)  # Enable CORS for the blueprint

# Configure OpenAI
openai.api_key = "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"
model = "code-davinci-edit-001"

# Define the route for generating the pie chart
@pie_chart_blueprint.route('/generate_pie_chart', methods=['POST'])
def generate_pie_chart():
    try:
        data = request.get_json()
        instruction = data.get('instruction', '')

        response = openai.Edit.create(
            model=model,
            instruction=instruction,
            temperature=0,
            top_p=1
        )

        generated_text = response['choices'][0]['text']
        return jsonify({'result': generated_text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
