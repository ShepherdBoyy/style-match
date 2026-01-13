const API_BASE_URL = 'http://192.168.1.6:5000';

export interface BoundingBox {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface DetectionResult {
  class: string;
  confidence: number;
  bbox: BoundingBox;
}

export interface RecommendationImage {
  image_url: string;
  hairStyle: string;
  hairColor: string;
  id: number;
}

export interface Recommendation {
  hairstyle: string;
  confidence: number;
  images: RecommendationImage[];
}

export interface ApiResponse {
  success: boolean;
  detections: DetectionResult[];
  primaryHairstyle: string | null;
  primaryConfidence: number;
  image: string | null;
  recommendations: Recommendation[];
  error?: string;
}

export const detectHairstyle = async (imageUri: string): Promise<ApiResponse> => {
  try {
    // Create form data
    const formData = new FormData();
    
    // Extract filename from URI
    const filename = imageUri.split('/').pop() || 'photo.jpg';
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : 'image/jpeg';

    // Append image to form data
    formData.append('image', {
      uri: imageUri,
      name: filename,
      type: type,
    } as any);

    // Optional: Add confidence threshold
    formData.append('confidence', '0.25');

    // Make API request
    const response = await fetch(`${API_BASE_URL}/api/detect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to detect hairstyle');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getAvailableClasses = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/classes`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch classes');
    }
    
    return data.classes;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const checkServerHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    const data = await response.json();
    return data.status === 'running';
  } catch (error) {
    console.error('Server health check failed:', error);
    return false;
  }
};