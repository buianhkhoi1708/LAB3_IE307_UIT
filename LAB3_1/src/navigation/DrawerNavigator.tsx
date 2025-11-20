import HelpScreen from '@/screens/HelpScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { DrawerParamList } from '@/types/navigation';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { HomeNavigator, NotificationNavigator } from './StackNavigator';


const Drawer = createDrawerNavigator<any>();

function DrawerNavigator() {
    const navigation = useNavigation();
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown: true, 
        headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.dispatch(DrawerActions.openDrawer)} 
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
    }}>
        
      <Drawer.Screen 
        name="Home" 
        component={HomeNavigator}
        options={{
            headerShown: false,
            title: "Home",
            drawerIcon: ({color, size}) => (
                <Ionicons name = "home-outline" color = {color} size = {size}/>
            )
        }}
         />
    <Drawer.Screen 
        name="Notifications" 
        component={NotificationNavigator}
        options={{
            headerShown: false,
             drawerIcon: ({color, size}) => (
                <Ionicons name = "notifications-outline" color = {color} size = {size}/>
            )
        }} />

     <Drawer.Screen 
        name="Helps" 
        component={HelpScreen}
        options={{
            headerShown: true,
            drawerIcon: ({color, size}) => (
                <Ionicons name = "help-circle-outline" color = {color} size = {size}/>
            )
        }} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;