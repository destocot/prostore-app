import * as v from 'valibot'
import { CurrencySchema, IdSchema } from '@/resources/validators'

export const CartItemSchema = v.object({
  id: IdSchema,
  name: v.pipe(v.string(), v.nonEmpty()),
  slug: v.pipe(v.string(), v.nonEmpty()),
  qty: v.pipe(v.number(), v.integer(), v.minValue(1)),
  image: v.pipe(v.string(), v.nonEmpty()),
  price: CurrencySchema,
})

export const CreateCartSchema = v.object({
  items: v.array(CartItemSchema),
  itemsPrice: CurrencySchema,
  totalPrice: CurrencySchema,
  shippingPrice: CurrencySchema,
  taxPrice: CurrencySchema,
  sessionCartId: IdSchema,
  userId: v.optional(IdSchema),
})

export type CartItemInput = v.InferInput<typeof CartItemSchema>
export type CartItemOutput = v.InferOutput<typeof CartItemSchema>

export type CreateCartInput = v.InferInput<typeof CreateCartSchema>
export type CreateCartOutput = v.InferOutput<typeof CreateCartSchema>
