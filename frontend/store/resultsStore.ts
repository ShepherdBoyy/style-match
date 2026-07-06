import { create } from 'zustand';
import { DetectionResult, Recommendation } from '@/services/api';

interface ResultsState {
  detections: DetectionResult[];
  primaryHairstyle: string | null;
  primaryConfidence: number;
  analyzedImage: string | null;
  recommendations: Recommendation[];
  setResults: (
    detections: DetectionResult[],
    primaryHairstyle: string | null,
    primaryConfidence: number,
    image: string | null,
    recommendations: Recommendation[]
  ) => void;
  clearResults: () => void;
}

export const useResultsStore = create<ResultsState>((set) => ({
  detections: [],
  primaryHairstyle: null,
  primaryConfidence: 0,
  analyzedImage: null,
  recommendations: [],
  setResults: (detections, primaryHairstyle, primaryConfidence, image, recommendations) =>
    set({
      detections,
      primaryHairstyle,
      primaryConfidence,
      analyzedImage: image,
      recommendations,
    }),
  clearResults: () =>
    set({
      detections: [],
      primaryHairstyle: null,
      primaryConfidence: 0,
      analyzedImage: null,
      recommendations: [],
    }),
}));