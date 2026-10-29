export type TagId = 'vegetarien' | 'epice' | 'gluten' | 'lait' | 'oeuf' | 'crustaces' | 'soja' | 'moutarde'

export interface TagMeta {
  id: TagId
  label: string
  kind: 'diet' | 'spice' | 'allergen'
}

export const TAGS: Record<TagId, TagMeta> = {
  vegetarien: { id: 'vegetarien', label: 'Végétarien', kind: 'diet' },
  epice: { id: 'epice', label: 'Épicé', kind: 'spice' },
  gluten: { id: 'gluten', label: 'Gluten', kind: 'allergen' },
  lait: { id: 'lait', label: 'Lait', kind: 'allergen' },
  oeuf: { id: 'oeuf', label: 'Œuf', kind: 'allergen' },
  crustaces: { id: 'crustaces', label: 'Crustacés', kind: 'allergen' },
  soja: { id: 'soja', label: 'Soja', kind: 'allergen' },
  moutarde: { id: 'moutarde', label: 'Moutarde', kind: 'allergen' },
}

export const DIET_FILTERS: TagId[] = ['vegetarien', 'epice']
