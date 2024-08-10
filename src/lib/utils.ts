import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function percentText(num: number): string {
  if (!num) return ''
  return (num * 100).toFixed(2)
}

export function numText(num: number): string {
  if (!num) return ''
  return num.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

export function textNum(text: string): number {
  if (!text) return 0
  return parseInt(text.replace(/\D/g,''))
}
