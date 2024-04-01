export function calculateTotal (items, tax) {
  return items.reduce(
    (acc, { price, taxable }) =>
      taxable ? acc + price * Math.abs(tax) + price : acc + price,
    0
  )
}
