import * as v from 'valibot'

export const SignInUserSchema = v.object({
  email: v.pipe(
    v.string('Your email must be a string.'),
    v.nonEmpty('Please enter your email.'),
    v.email('Your email is badly formatted.'),
  ),
  password: v.pipe(v.string('Your password must be a string.'), v.nonEmpty('Please enter your password.')),
})

export const SignUpUserSchema = v.pipe(
  v.object({
    name: v.pipe(
      v.string('Your name must be a string.'),
      v.nonEmpty('Please enter your name.'),
      v.minLength(3, 'Your name must have 3 characters or more.'),
    ),
    email: v.pipe(
      v.string('Your email must be a string.'),
      v.nonEmpty('Please enter your email.'),
      v.email('Your email is badly formatted.'),
    ),
    password: v.pipe(
      v.string('Your password must be a string.'),
      v.nonEmpty('Please enter your password.'),
      v.minLength(6, 'Your password must have 6 characters or more.'),
    ),
    confirmPassword: v.pipe(v.string('Your password must be a string.'), v.nonEmpty('Please enter your password.')),
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['confirmPassword']],
      (input) => input.password === input.confirmPassword,
      'The two passwords do not match.',
    ),
    ['confirmPassword'],
  ),
)

export type SignInUserInput = v.InferInput<typeof SignInUserSchema>
export type SignInUserOutput = v.InferOutput<typeof SignInUserSchema>
export type SignUpUserInput = v.InferInput<typeof SignUpUserSchema>
export type SignUpUserOutput = v.InferOutput<typeof SignUpUserSchema>
