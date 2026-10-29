<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__brand">
        <p class="footer__logo">Miamo</p>
        <p>Un fast-food fictif, pensé et codé pour le plaisir.</p>
      </div>

      <div class="footer__col">
        <h2>Le menu</h2>
        <NuxtLink to="/chaine/burgers">Burgers</NuxtLink>
        <NuxtLink to="/chaine/menus">Menus</NuxtLink>
        <NuxtLink to="/atelier">Atelier burger</NuxtLink>
      </div>

      <div class="footer__col">
        <h2>Le restaurant</h2>
        <NuxtLink to="/infos">Horaires &amp; adresse</NuxtLink>
        <p class="footer__address">12 rue des Frites, 00000 Croustiville</p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© {{ year }} Miamo — projet de démonstration, rien n’est vraiment livré.</p>
      <nav class="footer__legal" aria-label="Informations légales">
        <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
        <NuxtLink to="/cgv">CGV</NuxtLink>
        <NuxtLink to="/confidentialite">Confidentialité</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: #efe9e2;
}

.footer__top {
  width: min(1180px, 100% - 40px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 36px;
  padding: 64px 0 40px;
}

.footer__brand p {
  max-width: 32ch;
  margin-top: 8px;
  color: #b9b2a7;
  font-size: 0.9rem;
  line-height: 1.5;
}

.footer__logo {
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 1.3rem;
  color: var(--secondary);
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col h2 {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8a8276;
}

.footer__col a {
  color: #efe9e2;
  font-size: 0.92rem;
  text-decoration: none;
}

.footer__col a:hover {
  color: var(--secondary);
}

.footer__address {
  margin: 0;
  color: #b9b2a7;
  font-size: 0.88rem;
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px 20px;
  border-top: 1px solid rgb(255 255 255 / 0.08);
  padding: 18px 16px;
  text-align: center;
}

.footer__bottom p {
  margin: 0;
  color: #8a8276;
  font-size: 0.8rem;
}

.footer__legal {
  display: flex;
  gap: 16px;
}

.footer__legal a {
  color: #8a8276;
  font-size: 0.8rem;
  text-decoration: underline;
  text-decoration-color: transparent;
}

.footer__legal a:hover {
  color: var(--secondary);
  text-decoration-color: var(--secondary);
}

@media (max-width: 720px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}
</style>
