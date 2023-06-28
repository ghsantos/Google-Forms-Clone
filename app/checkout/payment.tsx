import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, View } from 'react-native'
import {
  Button,
  Card,
  Checkbox,
  Switch,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper'

export default function PaymentDetails() {
  const router = useRouter()
  const theme = useTheme()

  const nextPage = () => {
    router.push('/')
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
        <Card.Title title="Payment details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            placeholder="4242 4242 4242 4242"
            label="Card number"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="mm/yyyy"
            label="Expiration date"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="Security code"
            label="Security code"
            style={{ backgroundColor: theme.colors.background }}
          />

          <Checkbox.Item label="Save payment information" status="unchecked" />
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </ScrollView>
  )
}
