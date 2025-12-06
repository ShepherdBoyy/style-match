import { create } from 'zustand';
import { DetectionResult } from '@/services/api';

interface ResultsState {
  detections: DetectionResult[];
  primaryHairstyle: string | null;
  primaryConfidence: number;
  analyzedImage: string | null;
  setResults: (
    detections: DetectionResult[],
    primaryHairstyle: string | null,
    primaryConfidence: number,
    image: string
  ) => void;
  clearResults: () => void;
}

export const useResultsStore = create<ResultsState>((set) => ({
  detections: [],
  primaryHairstyle: null,
  primaryConfidence: 0,
  analyzedImage: null,
  setResults: (detections, primaryHairstyle, primaryConfidence, image) =>
    set({
      detections,
      primaryHairstyle,
      primaryConfidence,
      analyzedImage: image,
    }),
  clearResults: () =>
    set({
      detections: [],
      primaryHairstyle: null,
      primaryConfidence: 0,
      analyzedImage: null,
    }),
}));