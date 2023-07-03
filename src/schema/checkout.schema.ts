import { z } from 'zod'

const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/

// Personal info form
export const PersonalInfoSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1),
  email: z.string().email({ message: 'Please provide a valid email!' }),
})

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>

// Delivery form
export const DeliveryInfoSchema = z.object({
  city: z.string().min(1),
  postalCode: z.string(),
  address: z.string(),
  shipping: z.enum(['free', 'fast', 'same_day']),
})

export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>

// Payment form
export const PaymentInfoSchema = z.object({
  number: z.string().regex(cardNumberRegex),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])(2[0-9]|[3-9][0-9])$/)
    .refine(
      val => {
        var [month, year] = [val.slice(0, 2), val.slice(2)]

        var date = new Date(parseInt(`20${year}`), parseInt(month) - 1)
        return date > new Date()
      },
      { message: 'Card is expired' },
    ),
  securityCode: z
    .string()
    .length(3, { message: 'Security code should be 3 digits long' }),
  saveInfo: z.boolean(),
})

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>
