# backend/diffuser_blueprint.py
from huggingface_hub import login
login()
from diffusers import StableDiffusionXLPipeline
import torch
from flask import Blueprint

# !pip install torch --index-url https://download.pytorch.org/whl/cu118
# !pip install diffusers accelerate transformers invisible_watermark

# Create a Flask Blueprint
diffuser_blueprint = Blueprint("diffuser_blueprint", __name__)

# Load the StableDiffusionXLPipeline and set it up
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-0.9", torch_dtype=torch.float16, variant="fp16", use_safetensors=True
)
pipe.to("cuda")
config = pipe.unet.config


@diffuser_blueprint.route("/process_image", methods=["POST"])
def process_image():
    data = request.get_json()
    prompt = data.get("prompt")
    if not prompt:
        return {"error": "Prompt is missing"}, 400

    image = pipe(prompt=prompt, num_inference_steps=30).images[0]

    # You can return the image in a desired format, like base64 encoded string or save it to a file
    # For this example, we'll return a simple message.
    return {"message": "Image processed successfully"}

# You can add more routes and functionalities to the blueprint as needed.
