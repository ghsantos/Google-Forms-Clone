import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function CheckoutStack() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: '#F0EBF8', flex: 1 },
          headerStyle: { backgroundColor: '#673AB8' },
          headerTitleStyle: { color: '#FFF' },
          headerTintColor: '#F0EBF8',
        }}
      >
        <Stack.Screen
          name="personal"
          options={{ title: 'Personal information' }}
        />
        <Stack.Screen
          name="delivery"
          options={{ title: 'Delivery information' }}
        />
        <Stack.Screen
          name="payment"
          options={{ title: 'Payment information' }}
        />
      </Stack>
    </>
  )
}
