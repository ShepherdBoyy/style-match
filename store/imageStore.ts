import { create } from 'zustand';

interface ImageStore {
  selectedImage: string | null;
  recommendations: {
    hairstyle: string;
    hairColor: string;
    confidence: number;
  } | null;
  setSelectedImage: (uri: string | null) => void;
  setRecommendations: (recommendations: any) => void;
  reset: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  selectedImage: null,
  recommendations: null,
  setSelectedImage: (uri) => set({ selectedImage: uri }),
  setRecommendations: (recommendations) => set({ recommendations }),
  reset: () => set({ selectedImage: null, recommendations: null }),
}));