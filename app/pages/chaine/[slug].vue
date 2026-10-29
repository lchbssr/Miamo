<script setup lang="ts">
import { Plus, Search } from 'lucide-vue-next'
import { channels, type Product } from '~/data/menu'
import { DIET_FILTERS, TAGS, type TagId } from '~/data/tags'

const route = useRoute()
const channel = channels.find((c) => c.slug === route.params.slug && c.products)
if (!channel?.products) {
  throw createError({ statusCode: 404, statusMessage: 'Cette chaîne n’existe pas.', fatal: true })
}
const products = channel.products

useHead({ title: channel.name })

const cart = useCart()
const play = useSound()
const { show } = useToast()

const query = ref('')
const active = ref<Set<TagId>>(new Set())

function toggleFilter(tag: TagId) {
  const next = new Set(active.value)
  if (next.has(tag)) next.delete(tag)
  else next.add(tag)
  active.value = next
  play('select')
}

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return products.filter((product) => {
    const matchesQuery = !q || product.name.toLowerCase().includes(q) || product.description.toLowerCase().includes(q)
    const matchesFilters = [...active.value].every((tag) => product.tags?.includes(tag))
    return matchesQuery && matchesFilters
  })
})

function add(product: Product) {
  cart.add({ id: product.id, name: product.name, price: product.price, icon: product.icon, tint: product.tint })
  play('add')
  show(`${product.name} ajouté au panier`)
}
</script>

<template>
  <div class="page" :style="{ '--c1': channel.colors[0], '--c2': channel.colors[1] }">
    <PageHeader :title="channel.name" :subtitle="channel.tagline" :icon="channel.icon" :colors="channel.colors" />

    <div class="toolbar">
      <label class="search">
        <Search :size="18" :stroke-width="2.4" />
        <input v-model="query" type="search" placeholder="Rechercher un produit…" aria-label="Rechercher dans le menu" />
      </label>
      <div class="filters" role="group" aria-label="Filtres">
        <button
          v-for="tag in DIET_FILTERS"
          :key="tag"
          class="filter"
          :aria-pressed="active.has(tag)"
          @click="toggleFilter(tag)"
        >
          {{ TAGS[tag].label }}
        </button>
      </div>
    </div>

    <p v-if="!filtered.length" class="empty-state">Aucun produit ne correspond à ta recherche.</p>

    <ul v-else class="products">
      <li v-for="(product, index) in filtered" :key="product.id" class="product panel" :style="{ '--i': index }">
        <div class="product__art">
          <FoodIcon :kind="product.icon" :tint="product.tint" />
        </div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <ul v-if="product.tags?.length" class="tags">
          <li v-for="t in product.tags" :key="t" :class="['tag', `tag--${TAGS[t].kind}`]">{{ TAGS[t].label }}</li>
        </ul>
        <div class="product__foot">
          <span class="price">{{ formatPrice(product.price) }}</span>
          <button class="pill pill--accent pill--small" @click="add(product)" @mouseenter="play('hover')">
            <Plus :size="18" :stroke-width="3" />
            Ajouter
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.search {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 240px;
  min-width: 0;
  padding: 0 16px;
  height: 46px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--white);
  color: var(--ink-soft);
}

.search input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
  font-size: 0.95rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter {
  height: 46px;
  padding: 0 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--white);
  color: var(--ink);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
}

.filter:hover {
  border-color: var(--accent);
}

.filter[aria-pressed='true'] {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--white);
}

.empty-state {
  padding: 48px 0;
  color: var(--ink-soft);
  font-weight: 700;
  text-align: center;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--ink-soft);
  font-size: 0.72rem;
  font-weight: 700;
}

.tag--diet {
  background: #e3f3d9;
  color: #3c7a2b;
}

.tag--spice {
  background: #fde3da;
  color: var(--accent-deep);
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.product {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  animation: enter 0.45s backwards cubic-bezier(.2, .9, .3, 1.2);
  animation-delay: calc(var(--i) * 0.06s);
  transition:
    border-color 0.15s,
    transform 0.15s;
}

.product:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}

.product__art {
  display: grid;
  place-items: center;
  height: 140px;
  margin-bottom: 6px;
  border-radius: calc(var(--radius) - 6px);
  background:
    radial-gradient(circle at 30% 20%, rgb(255 255 255 / 0.6), transparent 55%),
    linear-gradient(160deg, var(--c1), var(--c2));
}

.product__art .food-icon {
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 5px 0 rgb(0 0 0 / 0.12));
  transition: transform 0.3s cubic-bezier(.2, .9, .3, 1.5);
}

.product:hover .food-icon {
  transform: scale(1.1) rotate(-4deg);
}

h2 {
  font-size: 1.2rem;
  font-weight: 900;
}

p {
  flex: 1;
  color: var(--ink-soft);
  font-weight: 600;
  line-height: 1.4;
}

.product__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 6px;
}

.price {
  font-size: 1.25rem;
  font-weight: 900;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }
}
</style>
