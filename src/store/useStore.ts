import { create } from 'zustand';
import type { User } from '../types';

interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
  isAssessmentComplete: boolean;
  setAssessmentComplete: (complete: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isAssessmentComplete: false,
  setAssessmentComplete: (complete) => set({ isAssessmentComplete: complete }),
}));