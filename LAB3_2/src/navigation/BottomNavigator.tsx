import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import SettingScreen from '../screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator<any>();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator>
        <Tabs.Screen
            name = "Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name = 'home-outline' color = {color} size = {size}/>
              )
            }}
            
        />

         <Tabs.Screen
            name = "Add Note"
            component={AddNoteScreen}
             options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name = 'add' color = {color} size = {size}/>
              )
            }}
            
        />

         <Tabs.Screen
            name = "Setting"
            component={SettingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name = 'book' color = {color} size = {size}/>
              )
            }}
            
        />
    </Tabs.Navigator>
  )
}

export default BottomNavigator;
