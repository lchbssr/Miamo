interface Toast {
  id: number
  text: string
}

let hideTimer: ReturnType<typeof setTimeout> | undefined

export function useToast() {
  const toast = useState<Toast | null>('toast', () => null)
  return {
    toast,
    show(text: string) {
      toast.value = { id: Date.now(), text }
      clearTimeout(hideTimer)
      hideTimer = setTimeout(() => (toast.value = null), 2200)
    },
  }
}
