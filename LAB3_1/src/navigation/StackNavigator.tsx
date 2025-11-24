// Bùi Anh Khôi - 23520759
import { createStackNavigator } from "@react-navigation/stack";
import MainTabs from "./MainTabs";
import HomeDetailScreen from "@/screens/HomeDetailScreen";
import NotificationScreen from "@/screens/NotificationScreen";
import NotifiactionDetailScreen from "@/screens/NotifiactionDetailScreen";

import { Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Stack = createStackNavigator<any>();

const NavButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}
      style={{ marginLeft: 15 }}
    >
      <AntDesign name="arrow-left" size={25} color="black" />
    </Pressable>
  );
};

const DrawerOpen = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
      style={{ marginLeft: 15 }}
    >
      <Ionicons name="menu" size={24} color="black" />
    </Pressable>
  );
};

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetailScreen}
        options={{
          headerLeft: () => <NavButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export function NotificationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerLeft: () => <DrawerOpen />,
        }}
      />
      <Stack.Screen
        name="NotificationDetail"
        component={NotifiactionDetailScreen}
        options={{
          headerLeft: () => <NavButton />,
        }}
      />
    </Stack.Navigator>
  );
}
