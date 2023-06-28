import React from 'react'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function PersonalDetails() {
  const router = useRouter()

  const nextPage = () => {
    router.push('/checkout/delivery')
  }

  return (
    <View>
      <Text>Personal details</Text>

      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </View>
  )
}
