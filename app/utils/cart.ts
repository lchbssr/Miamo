import type { IconKind } from '../data/menu'

export interface CartItem {
  id: string
  name: string
  price: number
  icon: IconKind
  tint?: string
  details?: string
}

export interface CartLine extends CartItem {
  qty: number
}

export const MAX_QTY = 20

export function addLine(lines: CartLine[], item: CartItem): CartLine[] {
  const existing = lines.find((line) => line.id === item.id)
  if (!existing) return [...lines, { ...item, qty: 1 }]
  return setQty(lines, item.id, existing.qty + 1)
}

export function setQty(lines: CartLine[], id: string, qty: number): CartLine[] {
  if (qty <= 0) return lines.filter((line) => line.id !== id)
  return lines.map((line) => (line.id === id ? { ...line, qty: Math.min(qty, MAX_QTY) } : line))
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.qty, 0)
}

export function cartTotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.price * line.qty, 0)
}

export function isCartLine(value: unknown): value is CartLine {
  if (typeof value !== 'object' || value === null) return false
  const line = value as Record<string, unknown>
  return (
    typeof line.id === 'string' &&
    typeof line.name === 'string' &&
    typeof line.icon === 'string' &&
    Number.isInteger(line.price) &&
    Number.isInteger(line.qty) &&
    (line.qty as number) > 0
  )
}

const priceFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })

export function formatPrice(cents: number): string {
  return priceFormat.format(cents / 100)
}
