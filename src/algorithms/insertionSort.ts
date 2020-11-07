import { swap } from './helpers'
import { Steps } from '../types'

export default function insertionSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]
  let j = 0

  for (let i = 1; i < array.length; i++) {
    j = i
    steps.push({
      array: [...array],
      currentIdx: j,
      prevIdx: j - 1
    })

    while (j > 0 && array[j - 1] > array[j]) {
      swap(j, j - 1, array)
      steps.push({
        array: [...array],
        currentIdx: j,
        prevIdx: j - 1
      })

      j--
    }
  }

  return [steps, array]
}