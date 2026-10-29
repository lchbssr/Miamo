<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useHead({ title: props.error.statusCode === 404 ? 'Page introuvable' : 'Erreur' })
</script>

<template>
  <div class="error">
    <div class="error__box panel">
      <p class="error__code">Erreur {{ error.statusCode }}</p>
      <h1>
        {{ error.statusCode === 404 ? 'Cette page n’est pas au menu.' : 'Oups, la friteuse a fait des siennes.' }}
      </h1>
      <p>Retourne au menu pour continuer.</p>
      <button class="pill pill--accent" @click="clearError({ redirect: '/' })">Menu Miamo</button>
    </div>
  </div>
</template>

<style scoped>
.error {
  display: grid;
  place-items: center;
  min-height: 100dvh;
  padding: 16px;
}

.error__box {
  display: grid;
  justify-items: center;
  gap: 12px;
  max-width: 520px;
  padding: 40px 28px;
  text-align: center;
}

.error__code {
  color: var(--ink-soft);
  font-weight: 800;
}

h1 {
  font-size: 1.6rem;
  font-weight: 900;
}

p {
  font-weight: 700;
}

.pill {
  margin-top: 12px;
}
</style>
