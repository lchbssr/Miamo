<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const { toast } = useToast()
</script>

<template>
  <div class="toast-zone" aria-live="polite">
    <Transition name="toast">
      <p v-if="toast" :key="toast.id" class="toast">
        <span class="toast__check"><Check :size="16" :stroke-width="3.5" /></span>
        {{ toast.text }}
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.toast-zone {
  position: fixed;
  inset: auto 0 24px;
  z-index: 30;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 16px;
  padding: 10px 20px 10px 10px;
  border: 3px solid var(--accent);
  border-radius: 999px;
  background: var(--white);
  box-shadow: var(--shadow);
  font-weight: 800;
}

.toast__check {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--white);
}

.toast-enter-active {
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(.2, .9, .3, 1.4);
}

.toast-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}
</style>
