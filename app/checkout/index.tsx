import React from 'react'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native'
import { Button, Card, TextInput, useTheme } from 'react-native-paper'

export default function PersonalDetails() {
  const router = useRouter()
  const theme = useTheme()

  const nextPage = () => {
    router.push('/checkout/delivery')
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
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            placeholder="Name"
            label="Name"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="hey@gmail.com"
            label="Email"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </ScrollView>
  )
}
