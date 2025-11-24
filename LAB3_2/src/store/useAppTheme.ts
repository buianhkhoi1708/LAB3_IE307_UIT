// Bùi Anh Khôi - 23520759
import { useStore } from "../store/useStore";
import { AppLightColor, AppDarkColor } from "../styles/color";

export const useAppTheme = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  return isDarkMode ? AppDarkColor : AppLightColor;
};
