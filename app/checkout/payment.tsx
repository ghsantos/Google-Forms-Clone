import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function PaymentDetails() {
  const router = useRouter()

  const nextPage = () => {
    router.push('/')
  }

  return (
    <View>
      <Text>Payment details</Text>

      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </View>
  )
}
