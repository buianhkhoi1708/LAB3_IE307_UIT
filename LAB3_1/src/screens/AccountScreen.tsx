import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '@/components/AppSafeView'
import AppText from '@/components/AppText'
import AppButton from '@/components/AppButton'
import { useAuthStore } from '@/store/authStore'

const ProfileScreen = () => {
   const logout = useAuthStore((s) => s.logout);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <AppSafeView style = {styles.container}>
      <AppText variant='bold'>Profile Screen</AppText>
      <AppButton butName='LOG OUT' onPress={handleLogout} style = {styles.button_container} style1 = {styles.button}/>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_container: {
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue'
  }

})