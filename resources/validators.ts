import { formatToTwoDecimals } from '@/lib/utils'
import * as v from 'valibot'

export const CurrencySchema = v.pipe(
  v.string('Your price must be a string.'),
  v.transform(Number),
  v.transform((x) => formatToTwoDecimals(x)),
  v.regex(/^\d+(\.\d{2})?$/, 'Your price must be a number.'),
)

export const IdSchema = v.pipe(
  v.number('Your id must be a number.'),
  v.integer('Your id must be an integer.'),
  v.minValue(1, 'Your id must be greater than 0.'),
)
