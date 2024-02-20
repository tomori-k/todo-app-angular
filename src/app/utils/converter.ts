export function toInt(s: string): number {
  const v = parseInt(s, 10)
  if (Number.isNaN(v)) throw new Error(`Invalid value: ${s}`)
  return v
}
