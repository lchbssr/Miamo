<script setup lang="ts">
import { Copy, Percent } from 'lucide-vue-next'

useHead({ title: 'Offres' })

const play = useSound()
const { show } = useToast()

const code = 'MIAMO10'

const deals = [
  { title: 'Happy Hour Teriyaki', description: 'Le Menu Teriyaki à prix réduit tous les jours de 14 h à 17 h.', badge: '-15 %' },
  { title: 'Mercredi Kids', description: 'La boisson est offerte avec chaque Menu Kids, tous les mercredis.', badge: 'Offert' },
  { title: 'Grosse faim', description: 'Une boisson offerte avec Le Colosse dès 20 € de commande.', badge: 'Dès 20 €' },
]

async function copyCode() {
  try {
    await navigator.clipboard.writeText(code)
    show('Code copié !')
  } catch {
    show(`Ton code : ${code}`)
  }
  play('select')
}
</script>

<template>
  <div class="page">
    <PageHeader
      title="Offres du moment"
      subtitle="Des bons plans à retrouver sur ta prochaine commande."
      icon="bag"
      :colors="['#ffc72c', '#e2572b']"
    />

    <section class="promo panel">
      <span class="promo__icon"><Percent :size="28" :stroke-width="2.4" /></span>
      <div class="promo__body">
        <p class="promo__title">-10 % sur toute la commande</p>
        <p class="promo__text">Entre ce code au moment de payer dans ton panier.</p>
      </div>
      <button class="promo__code" @click="copyCode">
        {{ code }}
        <Copy :size="16" :stroke-width="2.4" />
      </button>
    </section>

    <ul class="deals">
      <li v-for="deal in deals" :key="deal.title" class="deal panel">
        <span class="deal__badge">{{ deal.badge }}</span>
        <h2>{{ deal.title }}</h2>
        <p>{{ deal.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.promo {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  margin-bottom: 28px;
  background: linear-gradient(120deg, var(--white) 0%, var(--tint) 100%);
}

.promo__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--ink);
}

.promo__body {
  flex: 1;
  min-width: 0;
}

.promo__title {
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 1.1rem;
}

.promo__text {
  margin-top: 4px;
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 0.9rem;
}

.promo__code {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: none;
  height: 46px;
  padding: 0 18px;
  border: 1.5px dashed var(--accent);
  border-radius: 999px;
  background: var(--white);
  color: var(--accent-deep);
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 0.95rem;
  cursor: pointer;
}

.promo__code:hover {
  background: var(--accent);
  color: var(--white);
  border-color: transparent;
}

.deals {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.deal {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 22px;
}

.deal__badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--accent-deep);
  font-weight: 800;
  font-size: 0.78rem;
}

.deal h2 {
  font-size: 1.05rem;
}

.deal p {
  color: var(--ink-soft);
  font-weight: 600;
  line-height: 1.4;
}

@media (max-width: 560px) {
  .promo {
    flex-wrap: wrap;
  }

  .promo__code {
    width: 100%;
    justify-content: center;
  }
}
</style>
