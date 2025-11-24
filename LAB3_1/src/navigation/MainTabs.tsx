// Bùi Anh Khôi - 23520759
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import HomeScreen from "@/screens/HomeScreen";
import CategoryScreen from "@/screens/CategoryScreen";
import FavoriteScreen from "@/screens/FavoriteScreen";
import AccountScreen from "@/screens/AccountScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "@/screens/AccountScreen";
import { useNavigation } from "@react-navigation/native";
import { TopNavigator } from "./TopNavigator";

const Tab = createBottomTabNavigator<any>();

export default function MainTabs() {
  const navigation = useNavigation;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3f6fffff",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Home",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Categories"
        component={TopNavigator}
        options={{
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
