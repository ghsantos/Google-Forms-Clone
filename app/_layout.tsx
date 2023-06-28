import React from 'react'
import { Slot } from 'expo-router'
import { MD3LightTheme, PaperProvider } from 'react-native-paper'

const theme = {
  ...MD3LightTheme,
  roundness: 1,
}

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  )
}
