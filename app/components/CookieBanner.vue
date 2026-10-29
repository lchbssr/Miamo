<script setup lang="ts">
const visible = ref(false)
const play = useSound()

onMounted(() => {
  try {
    if (!localStorage.getItem('miamo:cookies')) visible.value = true
  } catch {
    visible.value = true
  }
})

function choose(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem('miamo:cookies', value)
  } catch {}
  visible.value = false
  play('select')
}
</script>

<template>
  <Transition name="rise">
    <div v-if="visible" class="cookie" role="dialog" aria-label="Préférences cookies">
      <p>
        Miamo garde ton panier et tes préférences dans ton navigateur, sans aucun traqueur. Détails dans notre
        <NuxtLink to="/confidentialite">politique de confidentialité</NuxtLink>.
      </p>
      <div class="cookie__actions">
        <button class="pill pill--small" @click="choose('declined')">Refuser</button>
        <button class="pill pill--accent pill--small" @click="choose('accepted')">Accepter</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie {
  position: fixed;
  inset: auto 0 0;
  z-index: 40;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px clamp(16px, 4vw, 40px);
  background: var(--ink);
  color: #efe9e2;
}

.cookie p {
  flex: 1 1 320px;
  max-width: 60ch;
  margin: 0;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.5;
}

.cookie a {
  color: var(--secondary);
}

.cookie__actions {
  display: flex;
  flex: none;
  gap: 10px;
}

.rise-enter-active,
.rise-leave-active {
  transition:
    transform 0.25s,
    opacity 0.25s;
}

.rise-enter-from,
.rise-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
