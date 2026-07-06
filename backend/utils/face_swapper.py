import cv2
import insightface
from insightface.app import FaceAnalysis
from insightface.model_zoo import get_model

class FaceSwapper:
    def __init__(self):
        self.app = FaceAnalysis(name="buffalo_l")
        self.app.prepare(ctx_id=0, det_size=(640, 640))
        self.swapper = get_model("models/inswapper_128.onnx")

    def extract_face(self, image):
        faces = self.app.get(image)
        if not faces:
            raise Exception("No face detected")
        return faces[0]

    def swap(self, target_image_path, source_face):
        target_img = cv2.imread(target_image_path)
        target_faces = self.app.get(target_img)

        if not target_faces:
            raise Exception("No face found in hairstyle reference")

        result = self.swapper.get(
            target_img,
            target_faces[0],
            source_face,
            paste_back=True
        )

        return result