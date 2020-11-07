import { swap } from './helpers'
import { Steps } from '../types'

export default function selectionSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]
  let smallestNumberIdx = 0

  for (let i = 0; i < array.length; i++) {
    smallestNumberIdx = i
    steps.push({
      array: [...array],
      currentIdx: smallestNumberIdx,
      nextIdx: -1
    })

    for (let j = i; j < array.length; j ++) {
      if (array[j] < array[smallestNumberIdx]) smallestNumberIdx = j
      steps.push({
        array: [...array],
        currentIdx: smallestNumberIdx,
        prevIdx: j
      })
    }

    swap(i, smallestNumberIdx, array)
    steps.push({
      array: [...array],
      currentIdx: smallestNumberIdx,
      prevIdx: i
    })
  }

  return [steps, array]
}