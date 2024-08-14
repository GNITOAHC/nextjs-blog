import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const Month = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export function formatDate(date: string) {
  const [year, month, day] = date.split('-')
  return `${Month[Number(month)]} ${Number(day)}, ${year}`
}

export function compareDesc(a: Date, b: Date) {
  return b.getTime() - a.getTime()
}
