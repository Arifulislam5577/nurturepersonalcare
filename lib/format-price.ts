const randFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  minimumFractionDigits: 2,
})

export function formatPrice(priceCents: number): string {
  return randFormatter.format(priceCents / 100)
}
