// Bùi Anh Khôi - 23520759
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppFonts } from "@/styles/fonts";
import { AppLightColor } from "@/styles/color";

type AppTextVariant = "bold" | "medium" | "light";

interface AppTextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: AppTextVariant;
}

const AppText = ({ children, style, variant, ...rest }: AppTextProps) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: AppFonts.RobotoBold,
    color: AppLightColor.primary_text,
  },
  medium: {
    fontSize: 18,
    fontFamily: AppFonts.RobotoMedium,
    color: AppLightColor.primary_text,
  },
  light: {
    fontSize: 16,
    fontFamily: AppFonts.RobotoLight,
    color: AppLightColor.primary_text,
  },
});
