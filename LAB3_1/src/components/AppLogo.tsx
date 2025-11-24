// Bùi Anh Khôi - 23520759
import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import { AppLightColor } from "@/styles/color";

interface AppLogo {
  text: string;
}

const AppLogo = ({ text }: AppLogo) => {
  return (
    <View style={styles.container}>
      <View style={[styles.logo_con]}>
        <Image source={require("../assets/images/logo.png")} />
      </View>
      <AppText variant="bold" style={styles.text}>
        {text}
      </AppText>
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 25,
    marginTop: 20,
  },
  logo_con: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: AppLightColor.logoBg,
  },
  text: {
    fontSize: 26,
  },
});
