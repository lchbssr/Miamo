<script setup lang="ts">
useHead({ title: 'Mentions légales' })
</script>

<template>
  <div class="page">
    <PageHeader title="Mentions légales" icon="info" :colors="['#b9c6ff', '#7d8ff2']" />

    <section class="legal panel">
      <article>
        <h2>Éditeur du site</h2>
        <p>Miamo est un projet de démonstration personnel, pas une véritable enseigne.</p>
      </article>

      <article>
        <h2>Hébergement</h2>
        <p>Le site est généré statiquement et publié via GitHub Pages.</p>
      </article>

      <article>
        <h2>Propriété intellectuelle</h2>
        <p>Textes, illustrations et sons sont fictifs, créés pour la démonstration.</p>
      </article>

      <article>
        <h2>Contact</h2>
        <p>Pour toute question sur ce projet, consulte le dépôt de code source du site.</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
.legal {
  display: grid;
  gap: 28px;
  padding: 32px clamp(24px, 4vw, 44px);
}

.legal article {
  display: grid;
  gap: 8px;
}

.legal h2 {
  font-size: 1.05rem;
}

.legal p {
  max-width: 68ch;
  color: var(--ink-soft);
  font-weight: 600;
  line-height: 1.6;
}
</style>
