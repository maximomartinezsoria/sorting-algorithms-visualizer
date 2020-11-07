import { Steps } from '../types'
import { swap } from './helpers'

export default function bubbleSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]
  let sorted = false

  while (!sorted) {
    sorted = true

    for (let j = 0; j < array.length; j++) {
      steps.push({
        array: [...array],
        currentIdx: j,
        nextIdx: j + 1
      })

      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array)
        steps.push({
          array: [...array],
          currentIdx: j,
          nextIdx: j + 1
        })
        sorted = false
      }
    }
  }

  steps.push({
    array: [...array],
    currentIdx: -1,
    nextIdx: -1
  })

  return [steps, array]
}
