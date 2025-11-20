import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '@/components/AppText'
import AppSafeView from '@/components/AppSafeView'

const CategoryScreen2 = () => {
  return (
    <AppSafeView style = {styles.container}>
      <AppText variant='bold'>Category 3</AppText>
    </AppSafeView>
  )
}

export default CategoryScreen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})