import { Steps } from '../types'

export default function mergeSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]

  if(array.length > 0) {
    const auxiliaryArray = [...array]
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray)
  }

  return [steps, array]
}

function mergeSortHelper(mainArray: number[], startIdx: number, endIdx: number, auxiliaryArray: number[]) {
  if (endIdx === startIdx) return

  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray)
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray)
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray)
}

function doMerge(mainArray: number[], startIdx: number, middleIdx: number, endIdx: number, auxiliaryArray: number[]) {
  let k = startIdx
  let i = startIdx
  let j = middleIdx + 1

  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      mainArray[k++] = auxiliaryArray[j++]
    }
  }

  while(i <= middleIdx) {
    mainArray[k++] = auxiliaryArray[i++]
  }

  while(j <= endIdx) {
    mainArray[k++] = auxiliaryArray[j++]
  }
}