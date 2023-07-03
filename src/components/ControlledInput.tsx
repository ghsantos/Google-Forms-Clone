import React from 'react'
import { View } from 'react-native'
import { HelperText, TextInput, useTheme } from 'react-native-paper'
import { Control, Controller } from 'react-hook-form'
import { MaskedTextInput } from 'react-native-mask-text'

type ControlledInputProps = {
  control: Control
  name: string
} & React.ComponentProps<typeof TextInput>

export default function ControlledInput({
  control,
  name,
  ...textInputProps
}: ControlledInputProps) {
  const theme = useTheme()

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
            {...textInputProps}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={invalid}
            style={{ backgroundColor: theme.colors.background }}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message || ''}
          </HelperText>
        </View>
      )}
    />
  )
}

type MaskedControlledInputProps = {
  control: Control
  name: string
  mask: string
} & React.ComponentProps<typeof TextInput>

export function MaskedControlledInput({
  control,
  name,
  mask,
  ...textInputProps
}: MaskedControlledInputProps) {
  const theme = useTheme()

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
            {...textInputProps}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={invalid}
            style={{ backgroundColor: theme.colors.background }}
            render={({ onChangeText, ...props }) => (
              <MaskedTextInput
                {...props}
                onChangeText={(text, rawText) => onChangeText(rawText)}
                mask={mask}
              />
            )}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message || ''}
          </HelperText>
        </View>
      )}
    />
  )
}
