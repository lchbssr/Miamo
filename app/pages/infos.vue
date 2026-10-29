<script setup lang="ts">
import { channels } from '~/data/menu'

useHead({ title: 'Horaires & infos' })

const channel = channels.find((c) => c.slug === 'infos')!

const hours = [
  { days: 'Lundi – Jeudi', time: '11 h 30 – 22 h 30' },
  { days: 'Vendredi – Samedi', time: '11 h 30 – 0 h 30' },
  { days: 'Dimanche', time: '12 h – 22 h' },
]

const today = (new Date().getDay() + 6) % 7
const todayRow = today < 4 ? 0 : today < 6 ? 1 : 2
</script>

<template>
  <div class="page">
    <PageHeader :title="channel.name" :subtitle="channel.tagline" :icon="channel.icon" :colors="channel.colors" />

    <div class="cards">
      <section class="panel card">
        <h2>Horaires</h2>
        <ul class="hours">
          <ClientOnly>
            <li v-for="(row, i) in hours" :key="row.days" :class="{ today: i === todayRow }">
              <span>{{ row.days }}</span>
              <strong>{{ row.time }}</strong>
            </li>
            <template #fallback>
              <li v-for="row in hours" :key="row.days">
                <span>{{ row.days }}</span>
                <strong>{{ row.time }}</strong>
              </li>
            </template>
          </ClientOnly>
        </ul>
      </section>

      <section class="panel card">
        <h2>Adresse</h2>
        <p>12 rue des Frites<br />00000 Croustiville</p>
        <p class="muted">Terrasse, bornes de commande et wifi gratuit.</p>
      </section>

      <section class="panel card">
        <h2>Le projet</h2>
        <p>
          Miamo est un fast-food fictif, créé pour s’amuser avec Nuxt et un vrai site de commande en ligne.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.card {
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 22px;
}

h2 {
  font-size: 1.25rem;
  font-weight: 900;
}

p {
  font-weight: 700;
  line-height: 1.5;
}

.muted {
  color: var(--ink-soft);
  font-weight: 600;
}

.hours {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.hours li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: 700;
}

.hours li.today {
  background: var(--tint);
  color: var(--accent-deep);
}
</style>
