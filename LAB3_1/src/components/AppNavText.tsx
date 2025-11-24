// Bùi Anh Khôi - 23520759
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";

interface AppNavText {
  text: string;
  text1: string;
  style?: AppNavTex | AppNavTex[];
  onPress: () => void;
}

const AppNavText = ({ text, text1, style, onPress }: AppNavText) => {
  return (
    <View style={[styles.container, style]}>
      <AppText variant="light" style={styles.text}>
        {text}
      </AppText>
      <Button title={text1} onPress={onPress} />
    </View>
  );
};

export default AppNavText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  text: {
    fontSize: 18,
  },
});
