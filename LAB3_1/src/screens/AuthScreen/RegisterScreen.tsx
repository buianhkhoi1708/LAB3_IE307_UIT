// Bùi Anh Khôi - 23520759
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "@/components/AppSafeView";
import AppLogo from "@/components/AppLogo";
import { AppTextInput } from "@/components/AppTextInput";
import AppButton from "@/components/AppButton";
import AppNavText from "@/components/AppNavText";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <AppSafeView>
      <AppLogo text="Create new account" />
      <AppTextInput
        text="Enter username"
        icon="person-outline"
        value={username}
        onText={setUsername}
      />
      <AppTextInput
        text="Enter email"
        icon="mail-outline"
        value={email}
        onText={setEmail}
      />
      <AppTextInput
        text="Enter password"
        icon="lock-closed-outline"
        value={password}
        onText={setPassword}
        password={true}
      />
      <AppTextInput
        text="Confirm password"
        icon="lock-closed-outline"
        value={confirm}
        onText={setConfirm}
        password={true}
      />
      <AppButton butName="CREATE" style={styles.button} />
      <AppNavText
        text="Already have an account?"
        text1="Login now!"
        onPress={() => navigation.navigate("Login")}
      />
    </AppSafeView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
});
