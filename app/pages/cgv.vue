<script setup lang="ts">
useHead({ title: 'CGV' })
</script>

<template>
  <div class="page">
    <PageHeader title="Conditions générales de vente" icon="info" :colors="['#b9c6ff', '#7d8ff2']" />

    <section class="legal panel">
      <article>
        <h2>Commandes</h2>
        <p>Les commandes sont fictives : rien n’est préparé ni livré.</p>
      </article>

      <article>
        <h2>Paiement</h2>
        <p>Aucun paiement réel n’est effectué ; les champs de carte ne sont ni transmis ni enregistrés.</p>
      </article>

      <article>
        <h2>Retrait de commande</h2>
        <p>Modes de retrait et délais affichés sont purement indicatifs.</p>
      </article>

      <article>
        <h2>Codes promo et fidélité</h2>
        <p>Points de fidélité et codes promo (ex. <strong>MIAMO10</strong>) n’ont aucune valeur réelle.</p>
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
