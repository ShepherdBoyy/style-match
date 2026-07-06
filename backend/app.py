from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import cv2
import uuid
from config.recommendations import RECOMMENDATIONS
from utils.detector import HairstyleDetector
from utils.face_swapper import FaceSwapper

# =========================
# Flask App Initialization
# =========================
app = Flask(__name__)
CORS(app)

# =========================
# Configuration
# =========================
UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'outputs'
REFERENCE_FOLDER = 'reference_hairstyles'

MODEL_PATH = 'models/best.pt'
CLASSES_PATH = 'config/classes.txt'

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_SIZE

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# =========================
# Global Instances
# =========================
detector = None
face_swapper = None

# =========================
# Helpers
# =========================
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# =========================
# Initialize Models
# =========================
@app.before_request
def initialize_models():
    global detector, face_swapper

    if detector is None:
        detector = HairstyleDetector(MODEL_PATH, CLASSES_PATH)
        print("✓ Hairstyle detector initialized")

    if face_swapper is None:
        face_swapper = FaceSwapper()
        print("✓ Face swapper initialized")

# =========================
# Routes
# =========================
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "status": "running",
        "message": "Hairstyle Detection + Face Swap API",
        "version": "2.0.0"
    })

# =========================
# MAIN API ENDPOINT
# =========================
@app.route('/api/detect', methods=['POST'])
def detect_hairstyle():
    try:
        # ---- Validate image ----
        if 'image' not in request.files:
            return jsonify({"success": False, "error": "No image file provided"}), 400

        file = request.files['image']

        if file.filename == '':
            return jsonify({"success": False, "error": "No file selected"}), 400

        if not allowed_file(file.filename):
            return jsonify({"success": False, "error": "Invalid file type"}), 400

        # ---- Save image ----
        filename = secure_filename(file.filename)
        image_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(image_path)

        conf_threshold = float(request.form.get('confidence', 0.25))

        # ---- YOLO Hairstyle Detection ----
        detection_results = detector.detect(image_path, conf_threshold)

        if not detection_results['success'] or not detection_results['detections']:
            os.remove(image_path)
            return jsonify({
                "success": False,
                "error": "No hairstyle detected",
                "detections": [],
                "primaryHairstyle": None,
                "primaryConfidence": 0,
                "image": None,
                "recommendations": []
            }), 200

        # ---- Save user image for response ----
        user_image_filename = f"user_{uuid.uuid4().hex}.jpg"
        user_image_output = os.path.join(OUTPUT_FOLDER, user_image_filename)
        
        # Copy original image to output folder
        import shutil
        shutil.copy(image_path, user_image_output)
        user_image_url = f"/outputs/{user_image_filename}"

        # ---- Load user image & extract face ----
        user_img = cv2.imread(image_path)
        user_face = face_swapper.extract_face(user_img)

        # ---- Top 3 hairstyle predictions ----
        top_hairstyles = detection_results['detections'][:3]
        recommendations = []

        for hair in top_hairstyles:
            hairstyle_name = hair['class']
            class_folder = os.path.join(REFERENCE_FOLDER, hairstyle_name)

            if not os.path.exists(class_folder):
                continue

            reference_images = sorted([
                os.path.join(class_folder, f)
                for f in os.listdir(class_folder)
                if f.lower().endswith(('.jpg', '.png'))
            ])[:3]

            # Get descriptions for this hairstyle class
            descriptions = RECOMMENDATIONS.get(hairstyle_name, [])

            hairstyle_outputs = []

            for idx, ref_img_path in enumerate(reference_images):
                swapped_image = face_swapper.swap(ref_img_path, user_face)

                output_filename = f"{uuid.uuid4().hex}.jpg"
                output_path = os.path.join(OUTPUT_FOLDER, output_filename)
                cv2.imwrite(output_path, swapped_image)

                # Get description for this specific image (if available)
                description = descriptions[idx] if idx < len(descriptions) else {}

                hairstyle_outputs.append({
                    "image_url": f"/outputs/{output_filename}",
                    "hairStyle": description.get('hairStyle', 'N/A'),
                    "hairColor": description.get('hairColor', 'N/A'),
                    "id": description.get('id', idx + 1)
                })

            recommendations.append({
                "hairstyle": hairstyle_name,
                "confidence": hair['confidence'],
                "images": hairstyle_outputs
            })

        # ---- Cleanup uploaded file ----
        os.remove(image_path)

        # ---- Final Response ----
        return jsonify({
            "success": True,
            "detections": detection_results['detections'],
            "primaryHairstyle": detection_results['primary_hairstyle'],
            "primaryConfidence": detection_results['primary_confidence'],
            "image": user_image_url,
            "recommendations": recommendations
        }), 200

    except Exception as e:
        # Cleanup on error
        if os.path.exists(image_path):
            os.remove(image_path)
            
        return jsonify({
            "success": False,
            "error": str(e),
            "detections": [],
            "primaryHairstyle": None,
            "primaryConfidence": 0,
            "image": None,
            "recommendations": []
        }), 500

# =========================
# Serve Generated Images
# =========================
@app.route('/outputs/<filename>')
def serve_output(filename):
    return send_from_directory(OUTPUT_FOLDER, filename)

# =========================
# Get Classes
# =========================
@app.route('/api/classes', methods=['GET'])
def get_classes():
    return jsonify({
        "success": True,
        "classes": detector.classes,
        "total": len(detector.classes)
    })

# =========================
# Run App
# =========================
if __name__ == '__main__':
    print("🚀 Starting Hairstyle + Face Swap API")
    app.run(debug=True, host='0.0.0.0', port=5000)
