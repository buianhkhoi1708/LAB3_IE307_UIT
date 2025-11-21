import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import SettingScreen from '../screens/SettingScreen';
import { NavigationContainer } from "@react-navigation/native";


const Tabs = createBottomTabNavigator<any>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Tabs.Navigator>
        <Tabs.Screen
            name = "Home"
            component={HomeScreen}
            
            
        />

         <Tabs.Screen
            name = "Add Note"
            component={AddNoteScreen}
            
        />

         <Tabs.Screen
            name = "Setting"
            component={SettingScreen}
            
        />
    </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})