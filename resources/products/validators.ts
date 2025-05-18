import * as v from 'valibot'
import { CurrencySchema } from '@/resources/validators'

export const CreateProductSchema = v.object({
  name: v.pipe(
    v.string('Your name must be a string.'),
    v.nonEmpty('Please enter your name.'),
    v.minLength(3, 'Your name must have 3 characters or more.'),
  ),
  slug: v.pipe(
    v.string('Your slug must be a string.'),
    v.nonEmpty('Please enter your slug.'),
    v.minLength(3, 'Your slug must have 3 characters or more.'),
  ),
  category: v.pipe(
    v.string('Your category must be a string.'),
    v.nonEmpty('Please enter your category.'),
    v.minLength(3, 'Your category must have 3 characters or more.'),
  ),
  images: v.pipe(v.array(v.string('Your images must be a string.')), v.nonEmpty('Your images must be 0 or more.')),
  brand: v.pipe(
    v.string('Brand is required'),
    v.nonEmpty('Brand is required'),
    v.minLength(3, 'Your brand must have 3 characters or more.'),
  ),
  description: v.pipe(
    v.string('Your description must be a string.'),
    v.nonEmpty('Please enter your description.'),
    v.minLength(3, 'Your description must have 3 characters or more.'),
  ),
  stock: v.pipe(
    v.string('Your stuck must be a string.'),
    v.transform(Number),
    v.minValue(0, 'Your stock must be 0 or more.'),
  ),
  price: CurrencySchema,
  isFeatured: v.boolean('Your isFeatured must be a boolean.'),
  banner: v.optional(
    v.pipe(
      v.string('Your banner must be a string.'),
      v.nonEmpty('Please enter your banner.'),
      v.minLength(3, 'Your banner must have 3 characters or more.'),
    ),
  ),
})

export type CreateProductInput = v.InferInput<typeof CreateProductSchema>
export type CreateProductOutput = v.InferOutput<typeof CreateProductSchema>
