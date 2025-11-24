import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
  isDarkMode: boolean;
  fontSize: number;
  toggleTheme: () => void;
  setFontSize: (size: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      fontSize: 16,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: 'my-app-settings', 
      storage: createJSONStorage(() => AsyncStorage), 
    }
  )
);