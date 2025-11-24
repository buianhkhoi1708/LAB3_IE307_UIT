// Bùi Anh Khôi - 23520759
import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { useStore } from "../store/useStore";
import { useAppTheme } from "../store/useAppTheme";
import AppSafeView from "../components/AppSafeView"; 
import AppText from "../components/AppText";
import { AppLightColor } from "../styles/color";

const SettingsScreen = () => {
  const { isDarkMode, fontSize, toggleTheme, setFontSize } = useStore();
  const colors = useAppTheme();

  return (
    <AppSafeView
      style={[styles.container, { backgroundColor: colors.bgColor }]}
    >
      <View style={[styles.section, { backgroundColor: colors.cardBg }]}>
        <AppText
          style={{
            color: colors.primary_text,
            fontSize: fontSize, 
          }}
        >
          Dark mode
        </AppText>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: AppLightColor.borderColor, true: AppLightColor.switchColor }}
          thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
        />
      </View>

      <View
        style={[
          styles.section,
          {
            backgroundColor: colors.cardBg,
            flexDirection: "column",
            alignItems: "stretch",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text style={{ color: colors.primary_text, fontSize: fontSize }}>
            Kích thước chữ
          </Text>
          <Text
            style={{ color: colors.primary_text, fontWeight: "bold", fontSize: fontSize }}
          >
            {fontSize}
          </Text>
        </View>

        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={12}
          maximumValue={36}
          step={2}
          value={fontSize}
          onValueChange={(val) => setFontSize(val)}
          minimumTrackTintColor={AppLightColor.switchColor}
          maximumTrackTintColor={colors.textSecondary}
          thumbTintColor={AppLightColor.switchColor}
        />

    
        <Text
          style={{
            color: colors.primary_text,
            fontSize: fontSize,
            marginTop: 20,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Cỡ chữ {fontSize}
        </Text>
      </View>
    </AppSafeView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  section: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
