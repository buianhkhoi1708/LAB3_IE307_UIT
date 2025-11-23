import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { useStore } from "../store/useStore";
import { useAppTheme } from "../store/useAppTheme";
import AppSafeView from "../components/AppSafeView"; // Giả sử bạn có component này

const SettingsScreen = () => {
  // 1. Lấy state và hàm thay đổi từ Store
  const { isDarkMode, fontSize, toggleTheme, setFontSize } = useStore();

  // 2. Lấy bộ màu hiện tại
  const colors = useAppTheme();

  return (
    <AppSafeView
      style={[styles.container, { backgroundColor: colors.bgColor }]}
    >
      {/* --- CÀI ĐẶT DARK MODE --- */}
      <View style={[styles.section, { backgroundColor: colors.cardBg }]}>
        <Text
          style={{
            color: colors.primary_text,
            fontSize: fontSize, // Áp dụng font size người dùng chọn
          }}
        >
          Chế độ tối (Dark Mode)
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "orange" }}
          thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
        />
      </View>

      {/* --- CÀI ĐẶT CỠ CHỮ --- */}
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
            style={{ color: "orange", fontWeight: "bold", fontSize: fontSize }}
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
          minimumTrackTintColor="orange"
          maximumTrackTintColor={colors.textSecondary}
          thumbTintColor="orange"
        />

        {/* Text xem trước */}
        <Text
          style={{
            color: colors.primary_text,
            fontSize: fontSize,
            marginTop: 20,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Văn bản xem trước với cỡ chữ {fontSize}
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
    // Flex row để switch nằm ngang hàng với text
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
