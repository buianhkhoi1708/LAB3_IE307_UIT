// Bùi Anh Khôi - 23520759
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "@/components/AppText";
import AppSafeView from "@/components/AppSafeView";

const CategoryScreen1 = () => {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">Category 2</AppText>
    </AppSafeView>
  );
};

export default CategoryScreen1;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
