import React from 'react'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native'
import { Button, Card, useTheme } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  PersonalInfo,
  PersonalInfoSchema,
} from '../../src/schema/checkout.schema'
import ControlledInput from '../../src/components/ControlledInput'

export default function PersonalDetails() {
  const router = useRouter()
  const theme = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  })

  const nextPage = data => {
    console.log(data)

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
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="hey@gmail.com"
            label="Email"
          />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  )
}
