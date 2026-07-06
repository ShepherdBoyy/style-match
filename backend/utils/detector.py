import os
from ultralytics import YOLO
import cv2
import numpy as np
from PIL import Image

class HairstyleDetector:
    def __init__(self, model_path, classes_path):
        """
        Initialize the YOLO11 hairstyle detector
        
        Args:
            model_path: Path to trained .pt model file
            classes_path: Path to classes.txt file
        """
        self.model_path = model_path
        self.classes_path = classes_path
        self.model = None
        self.classes = []
        
        self._load_model()
        self._load_classes()
    
    def _load_model(self):
        """Load the YOLO11 model"""
        try:
            if not os.path.exists(self.model_path):
                raise FileNotFoundError(f"Model file not found at {self.model_path}")
            
            self.model = YOLO(self.model_path)
            print(f"✓ Model loaded successfully from {self.model_path}")
        except Exception as e:
            print(f"✗ Error loading model: {str(e)}")
            raise
    
    def _load_classes(self):
        """Load class names from classes.txt"""
        try:
            if not os.path.exists(self.classes_path):
                raise FileNotFoundError(f"Classes file not found at {self.classes_path}")
            
            with open(self.classes_path, 'r') as f:
                self.classes = [line.strip() for line in f.readlines() if line.strip()]
            
            print(f"✓ Loaded {len(self.classes)} classes: {self.classes}")
        except Exception as e:
            print(f"✗ Error loading classes: {str(e)}")
            raise
    
    def detect(self, image_path, conf_threshold=0.25):
        """
        Detect hairstyle in an image
        
        Args:
            image_path: Path to image file
            conf_threshold: Confidence threshold for detection (0-1)
        
        Returns:
            dict: Detection results with hairstyle predictions
        """
        try:
            # Run inference
            results = self.model(image_path, conf=conf_threshold)
            
            # Process results
            detections = []
            for result in results:
                boxes = result.boxes
                
                for box in boxes:
                    # Get box coordinates
                    x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                    
                    # Get confidence and class
                    confidence = float(box.conf[0].cpu().numpy())
                    class_id = int(box.cls[0].cpu().numpy())
                    class_name = self.classes[class_id] if class_id < len(self.classes) else "Unknown"
                    
                    detections.append({
                        'class': class_name,
                        'confidence': round(confidence, 3),
                        'bbox': {
                            'x1': float(x1),
                            'y1': float(y1),
                            'x2': float(x2),
                            'y2': float(y2)
                        }
                    })
            
            # Sort by confidence (highest first)
            detections.sort(key=lambda x: x['confidence'], reverse=True)
            
            return {
                'success': True,
                'detections': detections,
                'total_detections': len(detections),
                'primary_hairstyle': detections[0]['class'] if detections else None,
                'primary_confidence': detections[0]['confidence'] if detections else 0
            }
            
        except Exception as e:
            return {
                'success': False,
                'error': str(e),
                'detections': []
            }