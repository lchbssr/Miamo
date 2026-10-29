export interface Prefs {
  sound: boolean
  music: boolean
}

export function usePrefs() {
  return useState<Prefs>('prefs', () => ({ sound: true, music: false }))
}

export function useSound() {
  const prefs = usePrefs()
  return (name: Sfx) => {
    if (prefs.value.sound) playSfx(name)
  }
}
