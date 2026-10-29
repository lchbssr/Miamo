<script setup lang="ts">
import { RotateCcw, ShoppingBag, Undo2 } from 'lucide-vue-next'
import { ingredients, MAX_LAYERS, type Ingredient, type IngredientId } from '~/data/ingredients'
import { channels } from '~/data/menu'

useHead({ title: 'Atelier burger' })

const channel = channels.find((c) => c.slug === 'atelier')!
const cart = useCart()
const play = useSound()
const { show } = useToast()

const layers = ref<{ key: number; id: IngredientId }[]>([])
let nextKey = 0

const ids = computed(() => layers.value.map((layer) => layer.id))
const full = computed(() => layers.value.length >= MAX_LAYERS)
const price = computed(() => burgerPrice(ids.value))

function stack(ingredient: Ingredient) {
  if (full.value) return
  layers.value.push({ key: nextKey++, id: ingredient.id })
  play('drop')
}

function undo() {
  if (!layers.value.pop()) return
  play('remove')
}

function reset() {
  layers.value = []
  play('back')
}

function order() {
  cart.add({
    id: burgerId(ids.value),
    name: 'Burger maison',
    price: price.value,
    icon: 'builder',
    details: burgerDetails(ids.value),
  })
  play('add')
  show('Ton burger est dans le panier')
  layers.value = []
}
</script>

<template>
  <div class="page">
    <PageHeader :title="channel.name" :subtitle="channel.tagline" :icon="channel.icon" :colors="channel.colors" />

    <div class="workshop">
      <section class="stage panel" aria-label="Ton burger">
        <TransitionGroup tag="div" name="drop" class="stack">
          <BurgerLayer key="bottom" id="bun-bottom" />
          <BurgerLayer v-for="layer in layers" :key="layer.key" :id="layer.id" />
          <BurgerLayer key="top" id="bun-top" />
        </TransitionGroup>
        <div class="plate" />
        <p class="stage__count">{{ layers.length }} / {{ MAX_LAYERS }} ingrédients</p>
      </section>

      <section class="side">
        <div class="palette panel">
          <h2>Ingrédients</h2>
          <div class="palette__grid">
            <button
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredient"
              :disabled="full"
              @click="stack(ingredient)"
              @mouseenter="play('hover')"
            >
              <span class="ingredient__swatch"><BurgerLayer :id="ingredient.id" /></span>
              <span class="ingredient__name">{{ ingredient.name }}</span>
              <span class="ingredient__price">+{{ formatPrice(ingredient.price) }}</span>
            </button>
          </div>
        </div>

        <div class="summary panel">
          <p class="summary__label">Ton burger</p>
          <p class="summary__price">{{ formatPrice(price) }}</p>
          <p class="summary__details">{{ ids.length ? burgerDetails(ids) : 'Juste les pains, pour l’instant.' }}</p>
          <div class="summary__actions">
            <button class="pill pill--small" :disabled="!layers.length" @click="undo">
              <Undo2 :size="18" :stroke-width="3" />
              Annuler
            </button>
            <button class="pill pill--small" :disabled="!layers.length" @click="reset">
              <RotateCcw :size="18" :stroke-width="3" />
              Recommencer
            </button>
          </div>
          <button class="pill pill--accent summary__order" :disabled="!layers.length" @click="order">
            <ShoppingBag :size="20" :stroke-width="2.6" />
            Ajouter au panier
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.workshop {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 24px;
  align-items: start;
}

.stage {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 460px;
  padding: 24px 16px 20px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 30%, #ffffff, transparent 70%),
    linear-gradient(#f4fbf0, #e3f3d9);
}

.stack {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: -10px;
}

.plate {
  width: 300px;
  height: 34px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 40%, #ffffff 55%, #dfe5ea);
  box-shadow: 0 6px 0 var(--ink);
}

.stage__count {
  margin-top: 16px;
  color: var(--ink-soft);
  font-weight: 800;
}

.side {
  display: grid;
  gap: 20px;
}

.palette,
.summary {
  padding: 20px;
}

h2 {
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 900;
}

.palette__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.ingredient {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 6px 10px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--white);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition:
    border-color 0.15s,
    transform 0.1s;
}

.ingredient:hover:not(:disabled) {
  border-color: var(--accent);
}

.ingredient:active:not(:disabled) {
  transform: translateY(2px);
}

.ingredient:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.ingredient__swatch {
  display: grid;
  place-items: center;
  width: 100%;
  height: 34px;
}

.ingredient__swatch .layer {
  --w: 70px;
  transform: scale(0.95);
}

.ingredient__name {
  font-size: 0.85rem;
  font-weight: 800;
  text-align: center;
  line-height: 1.15;
}

.ingredient__price {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--ink-soft);
}

.summary {
  display: grid;
  gap: 6px;
}

.summary__label {
  color: var(--ink-soft);
  font-weight: 800;
}

.summary__price {
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 1;
}

.summary__details {
  min-height: 1.4em;
  color: var(--ink-soft);
  font-weight: 600;
}

.summary__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}

.summary__order {
  margin-top: 10px;
}

.drop-enter-active {
  animation: drop 0.55s cubic-bezier(.3, .8, .4, 1);
}

.drop-leave-active {
  animation: fly 0.25s ease-in forwards;
}

.drop-move {
  transition: transform 0.35s cubic-bezier(.3, .8, .4, 1.2);
}

@keyframes drop {
  0% {
    opacity: 0;
    transform: translateY(-280px);
  }
  55% {
    opacity: 1;
    transform: translateY(6px) scaleY(0.85);
  }
  75% {
    transform: translateY(-6px);
  }
  100% {
    transform: none;
  }
}

@keyframes fly {
  to {
    opacity: 0;
    transform: translate(140px, -40px) rotate(18deg);
  }
}

@media (max-width: 860px) {
  .workshop {
    grid-template-columns: 1fr;
  }

  .stage {
    min-height: 400px;
  }
}

@media (max-width: 420px) {
  .palette__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stage {
    zoom: 0.85;
  }
}
</style>
