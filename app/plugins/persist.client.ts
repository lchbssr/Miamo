const CART_KEY = 'miamo:cart'
const PREFS_KEY = 'miamo:prefs'
const LOYALTY_KEY = 'miamo:loyalty'

function read(key: string): unknown {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

export default defineNuxtPlugin(() => {
  const { lines } = useCart()
  const prefs = usePrefs()
  const { points } = useLoyalty()

  // Reading storage before hydration ends (pages hydrate after app:mounted) makes server and client HTML disagree.
  onNuxtReady(() => {
    const savedCart = read(CART_KEY)
    if (Array.isArray(savedCart)) lines.value = savedCart.filter(isCartLine)

    const savedPrefs = read(PREFS_KEY) as Partial<Prefs> | null
    if (typeof savedPrefs?.sound === 'boolean') prefs.value.sound = savedPrefs.sound
    if (typeof savedPrefs?.music === 'boolean') prefs.value.music = savedPrefs.music

    const savedPoints = read(LOYALTY_KEY)
    if (typeof savedPoints === 'number' && Number.isFinite(savedPoints)) points.value = savedPoints

    watch(lines, (value) => write(CART_KEY, value), { deep: true })
    watch(prefs, (value) => write(PREFS_KEY, value), { deep: true })
    watch(points, (value) => write(LOYALTY_KEY, value))
  })
})
