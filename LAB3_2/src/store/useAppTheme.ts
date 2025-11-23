// src/hooks/useAppTheme.ts
import { useStore } from "../store/useStore";
import { AppLightColor, AppDarkColor } from "../styles/color";

export const useAppTheme = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  return isDarkMode ? AppDarkColor : AppLightColor;
};
