import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '@/components/AppSafeView'
import AppText from '@/components/AppText'

const NotifiactionDetailScreen = () => {
  return (
    <AppSafeView style = {styles.container}>
      <AppText variant = 'bold'>NotifiactionDetailScreen</AppText>
    </AppSafeView>
  )
}

export default NotifiactionDetailScreen

const styles = StyleSheet.create({
   container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})