import { swap } from './helpers'
import { Steps } from '../types'

export default function quickSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]

  quickSortHelper(array, steps, 0, array.length - 1)

  return [steps, array]
}

function quickSortHelper(array: number[], steps: Steps, startIdx: number, endIdx: number) {
  if (startIdx >= endIdx) return
  const pivotIdx = startIdx
  const pivot = array[pivotIdx]
  let leftIdx = startIdx + 1
  let rightIdx = endIdx
  let left = 0
  let right = 0

  while (rightIdx >= leftIdx) {
    left = array[leftIdx]
    right = array[rightIdx]

    if (left > pivot && right < pivot) swap(leftIdx, rightIdx, array)
    if (left <= pivot) leftIdx++
    if (right >= pivot) rightIdx--
  }

  swap(rightIdx, pivotIdx, array)
  const leftSubarrayIsSmaller = rightIdx - 1 - leftIdx < endIdx - (rightIdx + 1)

  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, steps, startIdx, rightIdx - 1)
    quickSortHelper(array, steps, rightIdx + 1, endIdx)
  } else {
    quickSortHelper(array, steps, rightIdx + 1, endIdx)
    quickSortHelper(array, steps, startIdx, rightIdx - 1)
  }
}