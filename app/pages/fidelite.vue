<script setup lang="ts">
import { Check, Lock } from 'lucide-vue-next'

useHead({ title: 'Fidélité' })

const { points } = useLoyalty()

const rewards = [
  { threshold: 300, label: 'Frites maison offertes' },
  { threshold: 600, label: 'Dessert au choix offert' },
  { threshold: 1200, label: 'Menu Classique offert' },
  { threshold: 2000, label: 'Menu Colosse offert' },
]
</script>

<template>
  <div class="page">
    <PageHeader
      title="Programme fidélité"
      subtitle="1 € dépensé = 10 points Miamo, cumulés à chaque commande."
      icon="bag"
      :colors="['#f5a623', '#d62300']"
    />

    <section class="balance panel">
      <p class="balance__label">Ton solde</p>
      <ClientOnly>
        <p class="balance__points">{{ points }} pts</p>
        <template #fallback>
          <p class="balance__points">&nbsp;</p>
        </template>
      </ClientOnly>
    </section>

    <ul class="rewards">
      <li v-for="reward in rewards" :key="reward.threshold" class="reward panel" :class="{ 'reward--unlocked': points >= reward.threshold }">
        <span class="reward__icon">
          <Check v-if="points >= reward.threshold" :size="20" :stroke-width="3" />
          <Lock v-else :size="18" :stroke-width="2.4" />
        </span>
        <span class="reward__body">
          <span class="reward__label">{{ reward.label }}</span>
          <span class="reward__threshold">{{ reward.threshold }} pts</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.balance {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 32px;
  margin-bottom: 28px;
  text-align: center;
}

.balance__label {
  color: var(--ink-soft);
  font-weight: 700;
}

.balance__points {
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 2.4rem;
  color: var(--accent-deep);
}

.rewards {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.reward {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  opacity: 0.55;
}

.reward--unlocked {
  opacity: 1;
  border-color: var(--accent);
}

.reward__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--tint);
  color: var(--ink-soft);
}

.reward--unlocked .reward__icon {
  background: var(--accent);
  color: var(--white);
}

.reward__body {
  display: flex;
  flex: 1;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.reward__label {
  font-weight: 800;
}

.reward__threshold {
  color: var(--ink-soft);
  font-weight: 700;
  font-size: 0.9rem;
}
</style>
