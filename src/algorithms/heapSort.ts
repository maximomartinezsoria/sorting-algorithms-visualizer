import { swap } from './helpers'
import { Steps } from '../types'

export default function heapSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]

  buildMaxHeap(array, steps)
  for(let endIdx = array.length - 1; endIdx >= 1; endIdx--) {
    swap(0, endIdx, array)
    steps.push({
      array: [...array],
      currentIdx: 0,
      nextIdx: endIdx
    })
    siftDown(0, endIdx - 1, array, steps)
  }

  return [steps, array]
}

function buildMaxHeap(array: number[], steps: Steps) {
  const firstParentIdx = Math.floor(array.length / 2)
  const endIdx = array.length - 1
  for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, endIdx, array, steps)
  }
}

function siftDown(currentIdx: number, endIdx: number, heap: number[], steps: Steps) {
  let childOneIdx = 2 * currentIdx + 1
  let potencialChildTwoIdx = 0
  let childTwoIdx = 0
  let idxToSwap = 0
 
  while (childOneIdx <= endIdx) {
    potencialChildTwoIdx = 2 * currentIdx + 2
    childTwoIdx = potencialChildTwoIdx <= endIdx ? potencialChildTwoIdx : -1

    steps.push({
      array: [...heap],
      prevIdx: childOneIdx,
      currentIdx,
      nextIdx: childTwoIdx
    })
    if (childTwoIdx > -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx
    } else {
      idxToSwap = childOneIdx
    }

    steps.push({
      array: [...heap],
      prevIdx: -1,
      currentIdx,
      nextIdx: idxToSwap
    })

    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(currentIdx, idxToSwap, heap)
      steps.push({
        array: [...heap],
        currentIdx,
        nextIdx: idxToSwap
      })

      currentIdx = idxToSwap
      childOneIdx = 2 * currentIdx + 1
      steps.push({
        array: [...heap],
        currentIdx,
        nextIdx: childOneIdx
      })
    } else {
      return
    }
  }
}