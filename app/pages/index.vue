<script setup lang="ts">
import type { Channel, Product } from '~/data/menu'
import { channels } from '~/data/menu'

const play = useSound()
const categories = channels.filter((c) => c.slug !== 'infos')

const picks = [
  { slug: 'burgers', productId: 'teriyaki' },
  { slug: 'frites', productId: 'shrimp-bites' },
  { slug: 'boissons', productId: 'melon-soda' },
  { slug: 'desserts', productId: 'mochi' },
] as const

const bestsellers = picks
  .map(({ slug, productId }) => {
    const channel = channels.find((c) => c.slug === slug)
    const product = channel?.products?.find((p) => p.id === productId)
    return product && channel ? { product, channel } : null
  })
  // Type predicate: tells TS the nulls are gone after filtering.
  .filter((entry): entry is { product: Product; channel: Channel } => entry !== null)
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero__inner">
        <div class="hero__text">
          <p class="hero__eyebrow">Miamo</p>
          <h1>Des burgers généreux, prêts en quelques minutes.</h1>
          <p class="hero__lead">
            Pain brioché, steak grillé sur place et sauce maison. Commande en ligne, sur place ou à emporter.
          </p>
          <div class="hero__actions">
            <NuxtLink to="/chaine/burgers" class="pill pill--accent" @click="play('select')">Voir le menu</NuxtLink>
            <NuxtLink to="/atelier" class="pill" @click="play('select')">Créer mon burger</NuxtLink>
          </div>
        </div>
        <div class="hero__art" aria-hidden="true"><FoodIcon kind="burger" /></div>
      </div>
    </section>

    <div class="sections">
      <section class="categories">
        <h2>Commander par catégorie</h2>
        <div class="categories__grid">
          <ChannelTile v-for="channel in categories" :key="channel.slug" :channel="channel" />
        </div>
      </section>

      <section class="bestsellers">
        <h2>Les incontournables</h2>
        <ul class="bestsellers__grid">
          <li v-for="entry in bestsellers" :key="entry.product.id">
            <NuxtLink :to="entry.channel.to" class="best" @click="play('select')" @mouseenter="play('hover')">
              <span class="best__art"><FoodIcon :kind="entry.product.icon" :tint="entry.product.tint" /></span>
              <span class="best__name">{{ entry.product.name }}</span>
              <span class="best__price">{{ formatPrice(entry.product.price) }}</span>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: var(--header-height);
}

.hero {
  background: linear-gradient(135deg, var(--accent) 0%, var(--burnt) 100%);
  color: var(--white);
}

.hero__inner {
  width: min(1180px, 100% - 40px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 32px;
  padding: clamp(56px, 10vw, 104px) 0;
}

.hero__eyebrow {
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--secondary);
}

.hero h1 {
  margin-top: 14px;
  font-size: clamp(2.2rem, 4.6vw, 3.4rem);
  line-height: 1.08;
  text-wrap: balance;
}

.hero__lead {
  max-width: 44ch;
  margin-top: 18px;
  font-size: clamp(1.05rem, 1.6vw, 1.2rem);
  font-weight: 600;
  color: rgb(255 255 255 / 0.92);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.hero .pill {
  background: var(--white);
  color: var(--accent-deep);
  border-color: transparent;
}

.hero .pill--accent {
  background: var(--ink);
  color: var(--white);
}

.hero__art {
  width: clamp(160px, 24vw, 260px);
  margin: 0 auto;
  animation: bob 3.4s ease-in-out infinite;
  filter: drop-shadow(0 16px 20px rgb(0 0 0 / 0.2));
}

.sections {
  width: min(1180px, 100% - 40px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(56px, 9vw, 96px);
  padding: clamp(56px, 9vw, 96px) 0 80px;
}

.categories h2,
.bestsellers h2 {
  margin-bottom: 24px;
  font-size: 1.5rem;
}

.categories__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(18px, 2.4vw, 28px);
}

.bestsellers__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(16px, 2vw, 24px);
  margin: 0;
  padding: 0;
  list-style: none;
}

.best {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 26px 16px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  color: var(--ink);
  text-align: center;
  text-decoration: none;
  transition:
    box-shadow 0.18s,
    transform 0.18s,
    border-color 0.18s;
}

.best:hover,
.best:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--shadow);
  transform: translateY(-3px);
}

.best__art {
  width: 80px;
  height: 80px;
}

.best__name {
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 0.92rem;
}

.best__price {
  color: var(--accent-deep);
  font-weight: 800;
  font-size: 0.92rem;
}

@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__lead {
    margin-inline: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bestsellers__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .categories__grid {
    grid-template-columns: 1fr;
  }
}
</style>
