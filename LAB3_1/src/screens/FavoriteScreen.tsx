import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "@/components/AppSafeView";
import AppText from "@/components/AppText";

const FavoriteScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">Favorite Screen</AppText>
    </AppSafeView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
