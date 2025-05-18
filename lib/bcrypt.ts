import { hash, compare } from 'bcrypt-ts-edge'

export async function hashPassword(password: string) {
  const result = await hash(password, 10)
  return result
}

export async function verifyPassword(data: { password: string; hash: string }) {
  const result = await compare(data.password, data.hash)
  return result
}
