import { describe, expect, it } from 'vitest'
import { addLine, cartCount, cartTotal, formatPrice, isCartLine, MAX_QTY, setQty, type CartItem } from '../app/utils/cart'

const frites: CartItem = { id: 'frites', name: 'Frites maison', price: 290, icon: 'fries' }
const cookie: CartItem = { id: 'cookie', name: 'Cookie géant', price: 240, icon: 'cookie' }

describe('cart', () => {
  it('adds a new item with a quantity of one', () => {
    expect(addLine([], frites)).toEqual([{ ...frites, qty: 1 }])
  })

  it('increments an item already in the cart', () => {
    const lines = addLine(addLine(addLine([], frites), cookie), frites)
    expect(lines.map((line) => [line.id, line.qty])).toEqual([
      ['frites', 2],
      ['cookie', 1],
    ])
  })

  it('removes a line when its quantity drops to zero', () => {
    const lines = addLine(addLine([], frites), cookie)
    expect(setQty(lines, 'frites', 0).map((line) => line.id)).toEqual(['cookie'])
  })

  it('caps the quantity', () => {
    expect(setQty(addLine([], frites), 'frites', 99)[0]?.qty).toBe(MAX_QTY)
  })

  it('counts items and sums prices', () => {
    const lines = setQty(addLine(addLine([], frites), cookie), 'frites', 3)
    expect(cartCount(lines)).toBe(4)
    expect(cartTotal(lines)).toBe(3 * 290 + 240)
  })

  it('rejects malformed saved lines', () => {
    expect(isCartLine({ ...frites, qty: 2 })).toBe(true)
    expect(isCartLine({ ...frites, qty: 0 })).toBe(false)
    expect(isCartLine({ ...frites, price: '2.90', qty: 1 })).toBe(false)
    expect(isCartLine(null)).toBe(false)
  })

  it('formats prices in euros', () => {
    expect(formatPrice(650).replace(/\s/g, ' ')).toBe('6,50 €')
  })
})
