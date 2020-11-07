export function swap(i: number, j: number, array: number[]) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}