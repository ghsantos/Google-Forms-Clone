import React, { createContext, useContext, useState } from 'react'
import {
  DeliveryInfo,
  PaymentInfo,
  PersonalInfo,
} from '../schema/checkout.schema'

type CheckoutContextType = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo>>
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo>>
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo>>
  onSubmitAll: (paymentInfo: PaymentInfo) => Promise<boolean>
}

const CheckoutContext = createContext<CheckoutContextType>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false),
})

export default function CheckoutContextProvider({ children }) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null)
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null)
  const [payment, setPayment] = useState<PaymentInfo | null>(null)

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo)

    console.log('Submit the multi step form')
    console.log(personal)
    console.log(delivery)
    console.log(paymentInfo)

    return true
  }

  return (
    <CheckoutContext.Provider
      value={{ setPersonal, setDelivery, setPayment, onSubmitAll }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext)
