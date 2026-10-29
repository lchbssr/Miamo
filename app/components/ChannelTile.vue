<script setup lang="ts">
import type { Channel } from '~/data/menu'

const props = defineProps<{ channel: Channel }>()
const play = useSound()
</script>

<template>
  <NuxtLink :to="props.channel.to" class="card" @click="play('select')" @mouseenter="play('hover')">
    <span class="card__icon" :style="{ '--c1': props.channel.colors[0], '--c2': props.channel.colors[1] }">
      <FoodIcon :kind="props.channel.icon" />
    </span>
    <span class="card__name">{{ props.channel.name }}</span>
    <span class="card__tagline">{{ props.channel.tagline }}</span>
    <span class="card__cta">Voir</span>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 24px 28px;
  border: 1px solid var(--line);
  border-radius: calc(var(--radius) + 4px);
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

.card:hover,
.card:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--shadow);
  transform: translateY(-4px);
}

.card__icon {
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 50%;
  background: linear-gradient(160deg, var(--c1), var(--c2));
}

.card__name {
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 1.15rem;
}

.card__tagline {
  max-width: 26ch;
  color: var(--ink-soft);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
}

.card__cta {
  margin-top: 10px;
  color: var(--accent);
  font-weight: 800;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.card:hover .card__cta {
  color: var(--accent-deep);
}
</style>
