export function pointsForTotal(totalCents: number): number {
  return Math.round(totalCents / 10)
}

export function useLoyalty() {
  const points = useState<number>('loyalty', () => 0)
  return {
    points,
    add(amount: number) {
      points.value += amount
    },
  }
}
