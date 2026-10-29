export type IconKind =
  | 'burger'
  | 'burger-classic'
  | 'burger-double'
  | 'burger-crispy'
  | 'burger-veggie'
  | 'burger-mountain'
  | 'burger-teriyaki'
  | 'burger-mushroom'
  | 'burger-inferno'
  | 'burger-shrimp'
  | 'burger-camembert'
  | 'burger-colossus'
  | 'burger-wildwest'
  | 'fries'
  | 'potatoes'
  | 'nuggets'
  | 'rings'
  | 'mozzarella'
  | 'wings'
  | 'shrimp-bites'
  | 'cheese-fries'
  | 'hash-browns'
  | 'inferno-bites'
  | 'cup'
  | 'shake'
  | 'mug'
  | 'latte'
  | 'sundae'
  | 'cookie'
  | 'donut'
  | 'churros'
  | 'matcha-tart'
  | 'mochi'
  | 'parfait'
  | 'sweet-potato'
  | 'bag'
  | 'builder'
  | 'info'

import type { TagId } from './tags'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  icon: IconKind
  tint?: string
  tags?: TagId[]
}

export interface Channel {
  slug: string
  name: string
  tagline: string
  highlights: string[]
  icon: IconKind
  colors: [string, string]
  to: string
  products?: Product[]
}

export const channels: Channel[] = [
  {
    slug: 'burgers',
    name: 'Burgers',
    tagline: 'Des pains briochés, du fromage qui coule et beaucoup d’amour.',
    highlights: ['Pain brioché du jour', 'Steak haché sur place', 'Option végé'],
    icon: 'burger',
    colors: ['#ffb057', '#ff7a45'],
    to: '/chaine/burgers',
    products: [
      { id: 'classique', name: 'Le Classique', description: 'Steak, cheddar, salade, tomate et sauce Miamo.', price: 650, icon: 'burger-classic', tags: ['gluten', 'lait'] },
      { id: 'double-cheddar', name: 'Double Cheddar', description: 'Deux steaks, deux tranches de cheddar, oignons confits.', price: 890, icon: 'burger-double', tags: ['gluten', 'lait'] },
      { id: 'croustillant', name: 'Le Croustillant', description: 'Poulet pané, salade, mayo citronnée.', price: 750, icon: 'burger-crispy', tags: ['gluten', 'oeuf'] },
      { id: 'vege-soleil', name: 'Le Végé Soleil', description: 'Galette de pois chiches, tomate, sauce poivron grillé.', price: 720, icon: 'burger-veggie', tags: ['vegetarien', 'gluten'] },
      { id: 'montagnard', name: 'Le Montagnard', description: 'Steak, raclette fondue, bacon, cornichons.', price: 940, icon: 'burger-mountain', tags: ['gluten', 'lait'] },
      { id: 'teriyaki', name: 'Le Teriyaki', description: 'Steak grillé, sauce teriyaki sucrée-salée, salade croquante.', price: 790, icon: 'burger-teriyaki', tags: ['gluten', 'soja'] },
      { id: 'champignon-royal', name: 'Le Champignon Royal', description: 'Steak, champignons rôtis, cheddar fondu, sauce oignon.', price: 850, icon: 'burger-mushroom', tags: ['gluten', 'lait'] },
      { id: 'inferno', name: 'L’Inferno', description: 'Steak épicé, flocons d’ail fumé, jalapeños, sauce feu.', price: 820, icon: 'burger-inferno', tags: ['epice', 'gluten'] },
      { id: 'crevette', name: 'Le Crevette Croustillante', description: 'Crevettes panées, salade, sauce cocktail au citron.', price: 780, icon: 'burger-shrimp', tags: ['crustaces', 'gluten', 'oeuf'] },
      { id: 'camembert', name: 'Le Camembert Fondant', description: 'Steak, camembert pané doré, confiture d’oignons.', price: 870, icon: 'burger-camembert', tags: ['gluten', 'lait'] },
      { id: 'colosse', name: 'Le Colosse', description: 'Quatre steaks empilés, triple cheddar, pour les grosses faims.', price: 1450, icon: 'burger-colossus', tags: ['gluten', 'lait'] },
      { id: 'far-west', name: 'Le Far West', description: 'Steak, oignons croustillants, bacon, sauce barbecue fumée.', price: 830, icon: 'burger-wildwest', tags: ['gluten', 'moutarde'] },
    ],
  },
  {
    slug: 'frites',
    name: 'Frites & Snacks',
    tagline: 'Dorés, croustillants, impossibles à partager.',
    highlights: ['Frites fraîches', 'Huile changée chaque jour', 'Sauces à volonté'],
    icon: 'fries',
    colors: ['#ffd84d', '#ffab2e'],
    to: '/chaine/frites',
    products: [
      { id: 'frites', name: 'Frites maison', description: 'Coupées le matin, salées juste ce qu’il faut.', price: 290, icon: 'fries', tags: ['vegetarien'] },
      { id: 'potatoes', name: 'Potatoes', description: 'Quartiers épicés, croustillants dehors, fondants dedans.', price: 320, icon: 'potatoes', tags: ['vegetarien'] },
      { id: 'nuggets', name: 'Nuggets ×6', description: 'Poulet pané et sa sauce barbecue.', price: 450, icon: 'nuggets', tags: ['gluten'] },
      { id: 'onion-rings', name: 'Onion rings', description: 'Rondelles d’oignon en panure dorée.', price: 340, icon: 'rings', tags: ['vegetarien', 'gluten'] },
      { id: 'mozzarella', name: 'Bâtonnets de mozzarella', description: 'Panure dorée, cœur filant, sauce tomate.', price: 390, icon: 'mozzarella', tags: ['vegetarien', 'lait', 'gluten'] },
      { id: 'wings', name: 'Ailes de poulet épicées', description: 'Marinées, grillées sur place, bien relevées.', price: 460, icon: 'wings', tags: ['epice'] },
      { id: 'shrimp-bites', name: 'Bouchées de crevette', description: 'Crevettes panées façon tempura, sauce aigre-douce.', price: 420, icon: 'shrimp-bites', tags: ['crustaces', 'gluten'] },
      { id: 'cheese-fries', name: 'Frites fromagères', description: 'Frites maison nappées d’une sauce cheddar fondue.', price: 380, icon: 'cheese-fries', tags: ['vegetarien', 'lait'] },
      { id: 'hash-browns', name: 'Galettes de pommes de terre', description: 'Croustillantes dehors, fondantes dedans.', price: 300, icon: 'hash-browns', tags: ['vegetarien'] },
      { id: 'inferno-bites', name: 'Bouchées Inferno', description: 'Poulet pané aux flocons d’ail fumé piquant.', price: 440, icon: 'inferno-bites', tags: ['epice', 'gluten'] },
    ],
  },
  {
    slug: 'boissons',
    name: 'Boissons',
    tagline: 'Des bulles, des glaçons et une paille qui fait du bruit.',
    highlights: ['Limonade artisanale', 'Thé infusé sur place', 'Milkshakes épais'],
    icon: 'cup',
    colors: ['#6fdcf2', '#2fa9d8'],
    to: '/chaine/boissons',
    products: [
      { id: 'limonade', name: 'Limonade pétillante', description: 'Citron pressé et une pointe de menthe.', price: 250, icon: 'cup', tint: '#ffd84d', tags: ['vegetarien'] },
      { id: 'the-glace', name: 'Thé glacé pêche', description: 'Thé noir infusé à froid, pêche de vigne.', price: 280, icon: 'cup', tint: '#ff9f5a', tags: ['vegetarien'] },
      { id: 'milkshake', name: 'Milkshake vanille', description: 'Glace vanille, lait entier, chantilly.', price: 390, icon: 'shake', tint: '#fff1c9', tags: ['lait'] },
      { id: 'milkshake-fraise', name: 'Milkshake fraise', description: 'Fraises fraîches mixées, chantilly.', price: 390, icon: 'shake', tint: '#ffb7cb', tags: ['lait'] },
      { id: 'eau', name: 'Eau minérale', description: 'Plate, 50 cl.', price: 180, icon: 'cup', tint: '#8fd8f0', tags: ['vegetarien'] },
      { id: 'melon-soda', name: 'Soda melon', description: 'Pétillant, vert vif, parfum de melon sucré.', price: 280, icon: 'cup', tint: '#8de36b', tags: ['vegetarien'] },
      { id: 'yuzu-soda', name: 'Soda yuzu', description: 'Agrume japonais, pétillant et acidulé.', price: 280, icon: 'cup', tint: '#f5c83a', tags: ['vegetarien'] },
      { id: 'milk-tea', name: 'Thé au lait royal', description: 'Thé noir infusé, lait onctueux, pointe de vanille.', price: 320, icon: 'mug', tint: '#e9c9a0', tags: ['lait'] },
      { id: 'matcha-latte', name: 'Latte matcha glacé', description: 'Thé vert matcha, lait frais, glaçons.', price: 350, icon: 'latte', tint: '#8bc34a', tags: ['lait'] },
      { id: 'iced-coffee', name: 'Café glacé', description: 'Café infusé à froid, glaçons, nuage de lait.', price: 330, icon: 'latte', tint: '#8a5a3c', tags: ['lait'] },
    ],
  },
  {
    slug: 'desserts',
    name: 'Desserts',
    tagline: 'Il reste toujours de la place pour un dessert.',
    highlights: ['Glace à l’italienne', 'Cookies du matin', 'Churros minute'],
    icon: 'sundae',
    colors: ['#ffb3d1', '#f772a8'],
    to: '/chaine/desserts',
    products: [
      { id: 'sundae', name: 'Sundae caramel', description: 'Glace vanille, caramel au beurre salé, cerise.', price: 350, icon: 'sundae', tags: ['lait'] },
      { id: 'cookie', name: 'Cookie géant', description: 'Pépites de chocolat noir, cœur moelleux.', price: 240, icon: 'cookie', tags: ['gluten', 'lait', 'oeuf'] },
      { id: 'donut', name: 'Donut glacé', description: 'Glaçage fraise et vermicelles multicolores.', price: 260, icon: 'donut', tags: ['gluten', 'lait', 'oeuf'] },
      { id: 'churros', name: 'Churros', description: 'Cinq churros au sucre, sauce chocolat.', price: 310, icon: 'churros', tags: ['gluten', 'oeuf'] },
      { id: 'matcha-tart', name: 'Tarte au matcha', description: 'Pâte sablée, crème onctueuse au thé vert.', price: 320, icon: 'matcha-tart', tags: ['gluten', 'lait', 'oeuf'] },
      { id: 'mochi', name: 'Mochi glacé', description: 'Trois mochis fondants, cœur de glace vanille et fraise.', price: 340, icon: 'mochi', tags: ['vegetarien', 'lait'] },
      { id: 'parfait', name: 'Parfait fraise', description: 'Fraises fraîches, chantilly et biscuit émietté en couches.', price: 350, icon: 'parfait', tags: ['lait', 'gluten'] },
      { id: 'sweet-potato', name: 'Beignet de patate douce', description: 'Patate douce japonaise, panure sucrée, cannelle.', price: 280, icon: 'sweet-potato', tags: ['vegetarien', 'gluten'] },
    ],
  },
  {
    slug: 'menus',
    name: 'Menus',
    tagline: 'Burger, accompagnement et boisson : tout est prévu.',
    highlights: ['Moins cher qu’à la carte', 'Boisson au choix', 'Menu Kids avec surprise'],
    icon: 'bag',
    colors: ['#c9a27a', '#a8743f'],
    to: '/chaine/menus',
    products: [
      { id: 'menu-classique', name: 'Menu Classique', description: 'Le Classique, frites maison et une boisson.', price: 1090, icon: 'bag', tags: ['gluten', 'lait'] },
      { id: 'menu-double', name: 'Menu Double', description: 'Double Cheddar, potatoes et une boisson.', price: 1290, icon: 'bag', tint: '#d62300', tags: ['gluten', 'lait'] },
      { id: 'menu-kids', name: 'Menu Kids', description: 'Mini burger, petites frites, compote et une surprise.', price: 690, icon: 'bag', tint: '#f5a623', tags: ['gluten'] },
      { id: 'menu-duo', name: 'Menu Duo', description: 'Deux burgers, deux frites, deux boissons, un dessert à partager.', price: 2190, icon: 'bag', tint: '#2fa9d8', tags: ['gluten', 'lait'] },
      { id: 'menu-teriyaki', name: 'Menu Teriyaki', description: 'Le Teriyaki, frites maison et une boisson.', price: 1150, icon: 'bag', tint: '#8a5a2b', tags: ['gluten', 'soja'] },
      { id: 'menu-inferno', name: 'Menu Inferno', description: 'L’Inferno, potatoes et une boisson.', price: 1190, icon: 'bag', tint: '#a81b00', tags: ['epice', 'gluten'] },
      { id: 'menu-crevette', name: 'Menu Crevette', description: 'Le Crevette Croustillante, frites et une boisson.', price: 1170, icon: 'bag', tint: '#f08a9b', tags: ['crustaces', 'gluten'] },
      { id: 'menu-colosse', name: 'Menu Colosse', description: 'Le Colosse, grande frite et une boisson au choix.', price: 1690, icon: 'bag', tint: '#2a1c10', tags: ['gluten', 'lait'] },
    ],
  },
  {
    slug: 'atelier',
    name: 'Atelier burger',
    tagline: 'Empile tes ingrédients préférés et compose ton burger.',
    highlights: ['Jusqu’à 8 ingrédients', 'Le prix suit en direct', 'Ton burger, ton nom'],
    icon: 'builder',
    colors: ['#9be15d', '#3cbf6b'],
    to: '/atelier',
  },
  {
    slug: 'infos',
    name: 'Horaires & infos',
    tagline: 'Où nous trouver et quand venir nous voir.',
    highlights: ['Ouvert 7 jours sur 7', 'Sur place ou à emporter', 'Terrasse au soleil'],
    icon: 'info',
    colors: ['#b9c6ff', '#7d8ff2'],
    to: '/infos',
  },
]
