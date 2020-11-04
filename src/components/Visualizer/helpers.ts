export const getWidth = (range: number): string => {
  return `${(100 / range) * 3}%`
}

export const getHeight = (n: number): string => {
  return `${(n + 1) * 2}px`
}