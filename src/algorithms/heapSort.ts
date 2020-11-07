import { swap } from './helpers'
import { Steps } from '../types'

export default function heapSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]

  buildMaxHeap(array)
  for(let endIdx = array.length - 1; endIdx >= 1; endIdx--) {
    swap(0, endIdx, array)
    siftDown(0, endIdx - 1, array)
  }

  return [steps, array]
}

function buildMaxHeap(array: number[]) {
  const firstParentIdx = Math.floor((array.length - 2) / 2)
  const endIdx = array.length - 1
  for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, endIdx, array)
  }
}

function siftDown(currentIdx: number, endIdx: number, heap: number[]) {
  let childOneIdx = 2 * currentIdx + 1
  let potencialChildTwoIdx = 0
  let childTwoIdx = 0
  let idxToSwap = 0
 
  while (childOneIdx <= endIdx) {
    potencialChildTwoIdx = 2 * currentIdx + 2
    childTwoIdx = potencialChildTwoIdx <= endIdx ? potencialChildTwoIdx : -1

    if (childTwoIdx > -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx
    } else {
      idxToSwap = childOneIdx
    }

    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(currentIdx, idxToSwap, heap)
      currentIdx = idxToSwap
      childOneIdx = 2 * currentIdx + 1
    } else {
      return
    }
  }
}