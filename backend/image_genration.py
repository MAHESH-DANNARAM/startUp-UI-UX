import requests

# The URL of your Flask app with the API prefix
app_url = "http://localhost:5000/api/image_generation"  # Replace with your actual app URL

# Sample data with a prompt
data = {
    "prompt": "Astronaut in a jungle, cold color palette, muted colors, detailed, 8k"
}

# Make the POST request to process the image
response = requests.post(f"{app_url}/process_image", json=data)

# Check the response
if response.status_code == 200:
    print("Image processed successfully!")
    # If you want to retrieve the image, you can access it from the response content
    # For example, you can save it to a file
    with open("processed_image.png", "wb") as f:
        f.write(response.content)
else:
    print("Error occurred:", response.json())
