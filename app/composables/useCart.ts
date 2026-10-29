export function useCart() {
  // useState, not ref: keeps cart state isolated per request on the server, then hydrates it on the client.
  const lines = useState<CartLine[]>('cart', () => [])
  return {
    lines,
    count: computed(() => cartCount(lines.value)),
    total: computed(() => cartTotal(lines.value)),
    add(item: CartItem) {
      lines.value = addLine(lines.value, item)
    },
    setQty(id: string, qty: number) {
      lines.value = setQty(lines.value, id, qty)
    },
    clear() {
      lines.value = []
    },
  }
}
