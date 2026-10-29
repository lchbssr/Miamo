export type IngredientId =
  | 'steak'
  | 'poulet'
  | 'cheddar'
  | 'salade'
  | 'tomate'
  | 'oignons'
  | 'bacon'
  | 'cornichons'
  | 'sauce'

export interface Ingredient {
  id: IngredientId
  name: string
  price: number
}

export const BURGER_BASE_PRICE = 400
export const MAX_LAYERS = 8

export const ingredients: Ingredient[] = [
  { id: 'steak', name: 'Steak', price: 180 },
  { id: 'poulet', name: 'Poulet croustillant', price: 190 },
  { id: 'cheddar', name: 'Cheddar', price: 60 },
  { id: 'bacon', name: 'Bacon', price: 90 },
  { id: 'salade', name: 'Salade', price: 30 },
  { id: 'tomate', name: 'Tomate', price: 40 },
  { id: 'oignons', name: 'Oignons', price: 30 },
  { id: 'cornichons', name: 'Cornichons', price: 30 },
  { id: 'sauce', name: 'Sauce Miamo', price: 40 },
]
