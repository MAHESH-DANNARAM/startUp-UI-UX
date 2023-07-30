import requests

url = "http://127.0.0.1:5000/generate_pie_chart"
headers = {'Content-Type': 'application/json'}
instruction = 'Generate Mermaid js code for sequenceDiagram about tea making'
data = {'instruction': instruction}

response = requests.post(url, json=data, headers=headers)
if response.status_code == 200:
    result = response.json()['result']
    print(result)
else:
    print(f"Error: {response.status_code}, {response.json()['error']}")
