import { describe, expect, it } from 'vitest'
import { BURGER_BASE_PRICE } from '../app/data/ingredients'
import { burgerDetails, burgerId, burgerPrice } from '../app/utils/burger'

describe('burger builder', () => {
  it('costs the base price with only the buns', () => {
    expect(burgerPrice([])).toBe(BURGER_BASE_PRICE)
  })

  it('adds the price of each layer', () => {
    expect(burgerPrice(['steak', 'cheddar', 'steak'])).toBe(BURGER_BASE_PRICE + 180 + 60 + 180)
  })

  it('gives the same id to the same stack', () => {
    expect(burgerId(['steak', 'salade'])).toBe(burgerId(['steak', 'salade']))
    expect(burgerId(['steak', 'salade'])).not.toBe(burgerId(['salade', 'steak']))
  })

  it('groups repeated ingredients in the details', () => {
    expect(burgerDetails(['steak', 'cheddar', 'steak', 'salade'])).toBe('Steak ×2, Cheddar, Salade')
  })
})
