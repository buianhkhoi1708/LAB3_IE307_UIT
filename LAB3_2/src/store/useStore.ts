import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
  isDarkMode: boolean;
  fontSize: number;
  toggleTheme: () => void;
  setFontSize: (size: number) => void;
}

// 3. Cấu hình Store với persist
export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // --- Khởi tạo giá trị mặc định ---s
      isDarkMode: false,
      fontSize: 16,

      // --- Các hành động (Actions) ---
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      // --- Cấu hình Persist ---
      name: 'my-app-settings', // Tên key để lưu trong bộ nhớ điện thoại
      storage: createJSONStorage(() => AsyncStorage), // Bắt buộc phải có dòng này cho React Native
    }
  )
);