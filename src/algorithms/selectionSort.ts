import { swap } from './helpers'
import { Steps } from '../types'

export default function selectionSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]
  let smallestNumberIdx = 0

  for (let i = 0; i < array.length; i++) {
    smallestNumberIdx = i

    for (let j = i; j < array.length; j ++) {
      if (array[j] < array[smallestNumberIdx]) smallestNumberIdx = j
    }

    swap(i, smallestNumberIdx, array)
  }

  return [steps, array]
}