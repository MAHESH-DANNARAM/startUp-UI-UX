from flask import Flask
from text_chart.chart import pie_chart_blueprint

app = Flask(__name__)

# Register the blueprint with the app
app.register_blueprint(pie_chart_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
