import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./StackNavigator";
import SettingsScreen from "../screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAppTheme } from "../store/useAppTheme";


const Bottom = createBottomTabNavigator();

export const BottomNavigator = () => {
  const colors = useAppTheme();
  return (
    <Bottom.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: colors.headerBg },
        headerStyle: { backgroundColor: colors.headerBg },
        headerTintColor: colors.headerText,
        headerTitleStyle: { fontWeight: "bold" }
    }}>
      <Bottom.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen 
        component={SettingsScreen} 
        name="Settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" size={size} color={color} />
          ),
        }}
        />
    </Bottom.Navigator>
  );
};
