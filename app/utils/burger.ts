import { BURGER_BASE_PRICE, ingredients, type IngredientId } from '../data/ingredients'

export function burgerPrice(layers: IngredientId[]): number {
  return layers.reduce(
    (sum, id) => sum + (ingredients.find((ingredient) => ingredient.id === id)?.price ?? 0),
    BURGER_BASE_PRICE,
  )
}

export function burgerId(layers: IngredientId[]): string {
  return `maison:${layers.join('-')}`
}

export function burgerDetails(layers: IngredientId[]): string {
  const counts = new Map<IngredientId, number>()
  for (const id of layers) counts.set(id, (counts.get(id) ?? 0) + 1)
  return [...counts]
    .map(([id, count]) => {
      const name = ingredients.find((ingredient) => ingredient.id === id)?.name ?? id
      return count > 1 ? `${name} ×${count}` : name
    })
    .join(', ')
}
