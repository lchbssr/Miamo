<script setup lang="ts">
useHead({ title: 'Confidentialité' })
</script>

<template>
  <div class="page">
    <PageHeader title="Politique de confidentialité" icon="info" :colors="['#b9c6ff', '#7d8ff2']" />

    <section class="legal panel">
      <article>
        <h2>Ce qui est stocké</h2>
        <p>
          Panier, préférences et points fidélité restent stockés dans ton navigateur - jamais envoyés à un
          serveur, ce site n’en a pas.
        </p>
      </article>

      <article>
        <h2>Cookies</h2>
        <p>La bannière enregistre juste ton choix, en local. Aucun cookie de mesure ou de publicité.</p>
      </article>

      <article>
        <h2>Tes droits</h2>
        <p>Rien ne quitte ton navigateur : vider le stockage local efface tout.</p>
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
