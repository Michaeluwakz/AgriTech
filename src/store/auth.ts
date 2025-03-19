import { create } from 'zustand';
import { User } from '../types';

// Mock implementation since we don't have actual Supabase setup
const mockSignOut = async () => {
  console.log('User signed out');
  return Promise.resolve();
};

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user, loading: false }),
  signOut: async () => {
    await mockSignOut();
    set({ user: null });
  },
}));