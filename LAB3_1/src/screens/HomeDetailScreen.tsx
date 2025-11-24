// Bùi Anh Khôi - 23520759
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "@/components/AppText";
import AppSafeView from "@/components/AppSafeView";

const HomeDetailScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">HomeDetailScreen</AppText>
    </AppSafeView>
  );
};

export default HomeDetailScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
