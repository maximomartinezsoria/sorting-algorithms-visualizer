import { Steps } from '../types'

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
        swap(j, array)
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

function swap(j: number, array: number[]) {
  const temp = array[j]
  array[j] = array[j + 1]
  array[j + 1] = temp
}
