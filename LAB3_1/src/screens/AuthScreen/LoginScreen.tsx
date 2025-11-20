import AppLogo from "@/components/AppLogo";
import AppSafeView from "@/components/AppSafeView";
import AppTextInput from "@/components/AppTextInput";
import AppButton from "@/components/AppButton";
import { View, StyleSheet, Image, Alert } from "react-native";
import AppText from "@/components/AppText";
import AppNavText from "@/components/AppNavText";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "@/store/authStore";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { ok, msg } = await login(email.trim(), password.trim());
    if (!ok) {
      Alert.alert(msg, "");
      return;
    }
  };

  return (
    <AppSafeView>
      <AppLogo text="Welcome" />
      <AppTextInput
        text="Email"
        icon="mail-outline"
        value={email}
        type="email-address"
        onText={setEmail}
      />
      <AppTextInput
        text="Password"
        icon="lock-closed-outline"
        style={styles.input_container}
        value={password}
        password={true}
        onText={setPassword}
      />
      <View style={styles.text_container}>
        <AppText variant="medium" style={styles.text}>
          Forgot password?
        </AppText>
      </View>
      <AppButton butName="LOGIN" style={styles.button} onPress={handleLogin} />
      <View style={styles.text1_container}>
        <AppText variant="bold">Or login with</AppText>
      </View>
      <View style={styles.icon_container}>
        <Image
          source={require("../../assets/images/gg.webp")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/images/fb.webp")}
          style={styles.icon}
        />
      </View>
      <AppNavText
        text="Don't have an account?"
        text1="Sign up here!"
        onPress={() => navigation.navigate("Register")}
      />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  input_container: {
    marginBottom: 6,
  },
  text_container: {
    alignItems: "flex-end",
    paddingHorizontal: 45,
    marginBottom: 30,
  },
  text: {
    color: "#ff078bf1",
    fontSize: 14,
  },
  button: {
    marginBottom: 30,
  },
  text1_container: {
    alignItems: "center",
  },
  icon_container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  icon: {
    width: 55,
    height: 55,
  },
});
