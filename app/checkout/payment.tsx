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
import { MaskedControlledInput } from '../../src/components/ControlledInput'
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
          <MaskedControlledInput
            control={control}
            name="number"
            placeholder="0000 0000 0000 0000"
            label="Card number"
            mask="9999 9999 9999 9999"
            keyboardType="numeric"
          />
          <MaskedControlledInput
            control={control}
            name="expirationDate"
            placeholder="mm/yy"
            label="Expiration date"
            mask="99/99"
            keyboardType="numeric"
          />
          <MaskedControlledInput
            control={control}
            name="securityCode"
            placeholder="000"
            label="Security code"
            mask="999"
            keyboardType="numeric"
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
