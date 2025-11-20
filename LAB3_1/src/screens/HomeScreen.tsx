import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "@/components/AppSafeView";
import AppText from "@/components/AppText";
import { useNavigation } from "@react-navigation/native";
import { AppLightColor } from "@/styles/color";
import AppButton from "@/components/AppButton";

const HomeScreen = () => {
  const navigator = useNavigation<any>();

  const goToDetail = () => {
    navigator.navigate("HomeDetails");
  };
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">Home Screen</AppText>
      <AppButton
        butName="GO TO DETAILS"
        onPress={goToDetail}
        style={styles.button_container}
        style1={styles.button}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    marginTop: 10,
  },
  button: {
    backgroundColor: "blue",
  },
});
