import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native'
import {
  Button,
  Card,
  RadioButton,
  TextInput,
  useTheme,
} from 'react-native-paper'

export default function DeliveryDetails() {
  const router = useRouter()
  const theme = useTheme()

  const [shipping, setShipping] = useState('free')

  const nextPage = () => {
    router.push('/checkout/payment')
  }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        width: '100%',
        maxWidth: 550,
        alignSelf: 'center',
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Deliver address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            placeholder="City"
            label="City"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="Postal Code"
            label="Postal Code"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="Address"
            label="Address"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Shipping options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group
            value={shipping}
            onValueChange={value => setShipping(value)}
          >
            <RadioButton.Item label="Free" value="free" />
            <RadioButton.Item label="Fast" value="fast" />
            <RadioButton.Item label="Same day" value="same_day" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </ScrollView>
  )
}
