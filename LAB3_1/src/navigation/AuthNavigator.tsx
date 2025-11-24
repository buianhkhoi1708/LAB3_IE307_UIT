// Bùi Anh Khôi - 23520759
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/AuthScreen/LoginScreen";
import RegisterScreen from "@/screens/AuthScreen/RegisterScreen";

const Stack = createNativeStackNavigator<any>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
