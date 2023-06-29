import { useRouter } from 'expo-router'
import React from 'react'
import { Alert, ScrollView } from 'react-native'
import { Button, Card, Checkbox, useTheme } from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  PaymentInfo,
  PaymentInfoSchema,
} from '../../src/schema/checkout.schema'
import ControlledInput from '../../src/components/ControlledInput'
import { useCheckoutContext } from '../../src/context/CheckoutContext'

export default function PaymentDetails() {
  const router = useRouter()
  const theme = useTheme()

  const { onSubmitAll } = useCheckoutContext()

  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: {
      saveInfo: false,
    },
  })

  const nextPage = async (data: PaymentInfo) => {
    // setPayment(data)
    const success = await onSubmitAll(data)

    if (success) {
      router.push('/')
    } else {
      Alert.alert('Failed to submit the form')
    }
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
          <ControlledInput
            control={control}
            name="number"
            placeholder="4242 4242 4242 4242"
            label="Card number"
          />
          <ControlledInput
            control={control}
            name="expirationDate"
            placeholder="mm/yyyy"
            label="Expiration date"
          />
          <ControlledInput
            control={control}
            name="securityCode"
            placeholder="Security code"
            label="Security code"
          />

          <Controller
            control={control}
            name="saveInfo"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label="Save payment information"
                status={value ? 'checked' : 'unchecked'}
                onPress={() => onChange(!value)}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Submit
      </Button>
    </ScrollView>
  )
}
