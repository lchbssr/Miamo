<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import type { IconKind } from '~/data/menu'

defineProps<{ title: string; subtitle?: string; icon: IconKind; colors: [string, string] }>()
const play = useSound()
</script>

<template>
  <header class="head" :style="{ '--c1': colors[0], '--c2': colors[1] }">
    <NuxtLink to="/" class="pill pill--small head__back" @click="play('back')" @mouseenter="play('hover')">
      <ArrowLeft :size="18" :stroke-width="3" />
      Menu Miamo
    </NuxtLink>
    <div class="head__banner">
      <div class="head__icon"><FoodIcon :kind="icon" /></div>
      <div>
        <h1>{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.head {
  display: grid;
  gap: 20px;
  margin-bottom: 36px;
}

.head__back {
  justify-self: start;
}

.head__banner {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 32px);
  padding: clamp(24px, 4vw, 40px) clamp(24px, 5vw, 48px);
  border-radius: calc(var(--radius) + 6px);
  background:
    radial-gradient(circle at 15% 10%, rgb(255 255 255 / 0.5), transparent 45%),
    linear-gradient(160deg, var(--c1), var(--c2));
  box-shadow: var(--shadow);
  color: var(--white);
}

.head__icon {
  flex: none;
  width: clamp(70px, 12vw, 110px);
  aspect-ratio: 1;
  animation: bob 3s ease-in-out infinite;
  filter: drop-shadow(0 6px 0 rgb(0 0 0 / 0.12));
}

h1 {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  text-shadow: 0 3px 0 rgb(0 0 0 / 0.12);
}

p {
  margin-top: 4px;
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-weight: 700;
}
</style>
