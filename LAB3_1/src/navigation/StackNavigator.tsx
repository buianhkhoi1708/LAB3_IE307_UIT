import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import HomeDetailScreen from '@/screens/HomeDetailScreen';
import NotificationScreen from '@/screens/NotificationScreen';
import NotifiactionDetailScreen from '@/screens/NotifiactionDetailScreen';
import HomeScreen from '@/screens/HomeScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();


export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainTabs} options={{headerShown: false}}/>
      <Stack.Screen name="HomeDetails" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
}

export function NotificationNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={NotificationScreen} options={{
        headerShown: true,
        headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.dispatch(DrawerActions.openDrawer)} 
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        
        }} />
      <Stack.Screen name="NotificationDetail" component={NotifiactionDetailScreen} />
    </Stack.Navigator>
  );
}

