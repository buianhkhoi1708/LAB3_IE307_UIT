import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "@/components/AppSafeView";
import AppText from "@/components/AppText";

const CategoryScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">Category 1</AppText>
    </AppSafeView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
