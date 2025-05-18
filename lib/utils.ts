import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// functions

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToTwoDecimals(n: number): string {
  const [int, dec] = String(n).split('.')
  return dec ? `${int}.${dec.padEnd(2, '0')}` : `${int}.00`
}

// constants

export const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const LATEST_PRODUCTS_TAKE = 4
