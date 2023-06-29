import React from 'react'
import { useRouter } from 'expo-router'
import { ScrollView, View } from 'react-native'
import {
  Button,
  Card,
  HelperText,
  RadioButton,
  useTheme,
} from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  DeliveryInfo,
  DeliveryInfoSchema,
} from '../../src/schema/checkout.schema'
import ControlledInput from '../../src/components/ControlledInput'
import { useCheckoutContext } from '../../src/context/CheckoutContext'

export default function DeliveryDetails() {
  const router = useRouter()
  const theme = useTheme()

  const { setDelivery } = useCheckoutContext()

  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: 'free',
    },
  })

  const nextPage = (data: DeliveryInfo) => {
    setDelivery(data)

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
          <ControlledInput
            control={control}
            name="city"
            placeholder="City"
            label="City"
          />
          <ControlledInput
            control={control}
            name="postalCode"
            placeholder="Postal Code"
            label="Postal Code"
          />
          <ControlledInput
            control={control}
            name="address"
            placeholder="Address"
            label="Address"
          />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Shipping options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <Controller
            control={control}
            name="shipping"
            render={({
              field: { value, onChange },
              fieldState: { error, invalid },
            }) => (
              <View>
                <HelperText type="error" visible={invalid}>
                  {error?.message || ''}
                </HelperText>

                <RadioButton.Group
                  value={value}
                  onValueChange={value => onChange(value)}
                >
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same day" value="same_day" />
                </RadioButton.Group>
              </View>
            )}
          />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  )
}
