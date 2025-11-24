// Bùi Anh Khôi - 23520759
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import AppSafeView from "@/components/AppSafeView";
import AppText from "@/components/AppText";
import { useNavigation } from "@react-navigation/native";
import AppButton from "@/components/AppButton";
import { AppLightColor } from "@/styles/color";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("NotificationDetail");
  };
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="bold">NotificationScreen</AppText>
      <AppButton
        butName="GO TO DETAILS"
        onPress={goToDetail}
        style={styles.button_container}
        style1={styles.button}
      />
    </AppSafeView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    marginTop: 10,
  },
  button: {
    backgroundColor: AppLightColor.button1Color,
  },
});
