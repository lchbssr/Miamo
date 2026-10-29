<script setup lang="ts">
import { Menu, Music, ShoppingBag, Star, Volume2, VolumeX, X } from 'lucide-vue-next'
import { channels } from '~/data/menu'

const { count } = useCart()
const { points } = useLoyalty()
const prefs = usePrefs()
const play = useSound()
const bump = ref(false)
const mobileOpen = ref(false)

const navLinks = channels.filter((c) => c.slug !== 'infos')

watch(count, (next, previous) => {
  if (next <= previous) return
  bump.value = false
  requestAnimationFrame(() => (bump.value = true))
})

function toggleSound() {
  prefs.value.sound = !prefs.value.sound
  play('select')
}

function toggleMusic() {
  getAudio()
  prefs.value.music = !prefs.value.music
  play('select')
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="bar">
      <NuxtLink to="/" class="logo" @click="play('back')">Miamo</NuxtLink>

      <nav class="nav nav--desktop" aria-label="Catégories">
        <NuxtLink v-for="c in navLinks" :key="c.slug" :to="c.to" class="nav__link" @click="play('select')">
          {{ c.name }}
        </NuxtLink>
        <NuxtLink to="/offres" class="nav__link" @click="play('select')">Offres</NuxtLink>
        <NuxtLink to="/infos" class="nav__link" @click="play('select')">Infos</NuxtLink>
      </nav>

      <div class="actions">
        <button
          class="icon-btn"
          :aria-pressed="prefs.sound"
          :aria-label="prefs.sound ? 'Couper le son' : 'Activer le son'"
          @click="toggleSound"
        >
          <component :is="prefs.sound ? Volume2 : VolumeX" :size="18" :stroke-width="2.4" />
        </button>
        <button
          class="icon-btn icon-btn--desktop"
          :aria-pressed="prefs.music"
          aria-label="Musique"
          @click="toggleMusic"
        >
          <Music :size="18" :stroke-width="2.4" />
        </button>

        <NuxtLink to="/fidelite" class="loyalty" @click="play('select')" @mouseenter="play('hover')">
          <Star :size="15" :stroke-width="2.4" />
          <ClientOnly><span>{{ points }}</span></ClientOnly>
        </NuxtLink>

        <NuxtLink
          to="/panier"
          class="cart"
          :aria-label="`Panier, ${count} article${count > 1 ? 's' : ''}`"
          @click="play('select')"
        >
          <ShoppingBag :size="20" :stroke-width="2.4" />
          <ClientOnly>
            <span v-if="count" class="badge" :class="{ 'badge--bump': bump }" @animationend="bump = false">{{ count }}</span>
          </ClientOnly>
        </NuxtLink>

        <button
          class="icon-btn icon-btn--burger"
          :aria-expanded="mobileOpen"
          aria-label="Menu"
          @click="mobileOpen = !mobileOpen"
        >
          <component :is="mobileOpen ? X : Menu" :size="20" :stroke-width="2.4" />
        </button>
      </div>
    </div>

    <Transition name="drop">
      <nav v-if="mobileOpen" class="nav--mobile" aria-label="Catégories">
        <NuxtLink v-for="c in navLinks" :key="c.slug" :to="c.to" class="nav__link" @click="closeMobile">
          {{ c.name }}
        </NuxtLink>
        <NuxtLink to="/offres" class="nav__link" @click="closeMobile">Offres</NuxtLink>
        <NuxtLink to="/infos" class="nav__link" @click="closeMobile">Infos</NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  background: var(--white);
  border-bottom: 1px solid var(--line);
}

.bar {
  display: flex;
  align-items: center;
  gap: clamp(16px, 4vw, 40px);
  height: var(--header-height);
  padding: 0 clamp(20px, 5vw, 56px);
}

.logo {
  flex: none;
  font-family: var(--font-display);
  font-synthesis: none;
  font-size: 1.55rem;
  color: var(--accent);
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 36px);
}

.nav--desktop {
  flex: 1;
  margin-left: clamp(8px, 3vw, 32px);
}

.nav__link {
  position: relative;
  padding: 8px 2px;
  color: var(--ink);
  font-weight: 700;
  font-size: 0.98rem;
  text-decoration: none;
  white-space: nowrap;
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 2px;
  background: var(--accent);
  transition: right 0.15s;
}

.nav__link:hover {
  color: var(--accent-deep);
}

.nav__link:hover::after,
.nav__link.router-link-active::after {
  right: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: none;
  margin-left: auto;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
}

.icon-btn:hover {
  background: var(--tint);
  color: var(--accent-deep);
}

.icon-btn[aria-pressed='true'] {
  background: var(--tint);
  color: var(--accent-deep);
}

.icon-btn--burger {
  display: none;
}

.loyalty {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--accent-deep);
  font-weight: 800;
  font-size: 0.82rem;
  text-decoration: none;
}

.loyalty:hover {
  background: var(--secondary);
  color: var(--ink);
}

.cart {
  position: relative;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--white);
  text-decoration: none;
}

.cart:hover {
  background: var(--accent-deep);
}

.badge {
  position: absolute;
  top: -4px;
  right: -4px;
  display: grid;
  place-items: center;
  min-width: 22px;
  height: 22px;
  padding: 0 5px;
  border: 2px solid var(--white);
  border-radius: 999px;
  background: var(--secondary);
  color: var(--ink);
  font-size: 0.68rem;
  font-weight: 900;
}

.badge--bump {
  animation: pop 0.4s ease-out;
}

.nav--mobile {
  display: none;
}

@media (max-width: 860px) {
  .nav--desktop {
    display: none;
  }

  .icon-btn--desktop {
    display: none;
  }

  .icon-btn--burger {
    display: grid;
  }

  .nav--mobile {
    display: flex;
    flex-direction: column;
    padding: 10px clamp(20px, 5vw, 56px) 20px;
    background: var(--white);
    border-bottom: 1px solid var(--line);
  }

  .nav--mobile .nav__link {
    padding: 16px 4px;
    border-top: 1px solid var(--line);
  }

  .nav--mobile .nav__link:first-child {
    border-top: none;
  }

  .nav--mobile .nav__link::after {
    display: none;
  }
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 0.15s,
    transform 0.15s;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
