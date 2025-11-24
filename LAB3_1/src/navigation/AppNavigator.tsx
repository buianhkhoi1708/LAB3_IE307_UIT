// Bùi Anh Khôi - 23520759
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "@/store/authStore";
import AuthNavigator from "@/navigation/AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

export default function AppNavigator() {
  const user = useAuthStore((s) => s.user);
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
