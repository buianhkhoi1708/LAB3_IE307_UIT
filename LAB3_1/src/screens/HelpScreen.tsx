// Bùi Anh Khôi - 23520759
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "@/components/AppSafeView";
import AppText from "@/components/AppText";

const HelpScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">HelpScreen</AppText>
    </AppSafeView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
