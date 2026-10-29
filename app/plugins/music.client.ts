export default defineNuxtPlugin(() => {
  const prefs = usePrefs()

  onNuxtReady(() => {
    // Browsers only let audio start after a click or a key press, so a saved "music on" waits for the first one.
    const sync = () => {
      if (prefs.value.music && document.visibilityState === 'visible' && peekAudio()) startMusic()
      else stopMusic()
    }
    const unlock = () => {
      if (peekAudio()) return
      getAudio()
      sync()
    }

    watch(() => prefs.value.music, sync, { immediate: true })
    document.addEventListener('visibilitychange', sync)
    document.addEventListener('pointerdown', unlock, { passive: true })
    document.addEventListener('keydown', unlock)
  })
})
