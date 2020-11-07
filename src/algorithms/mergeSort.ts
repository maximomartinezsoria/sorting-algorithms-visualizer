import { Steps } from '../types'

export default function mergeSort(originalArray: number[]): [Steps, number[]] {
  const steps: Steps = []
  const array = [...originalArray]

  if(array.length > 0) {
    const auxiliaryArray = [...array]
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, steps, 0)
  }

  return [steps, array]
}

function mergeSortHelper(mainArray: number[], startIdx: number, endIdx: number, auxiliaryArray: number[], steps: Steps, stepCounter: number) {
  if (endIdx === startIdx) return

  const middleIdx = Math.floor((startIdx + endIdx) / 2)

  steps.push({
    array: getStepArray(mainArray, auxiliaryArray, stepCounter),
    prevIdx: startIdx,
    currentIdx: middleIdx,
    nextIdx: endIdx
  })

  stepCounter++
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, steps, stepCounter)
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, steps, stepCounter)
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, steps, stepCounter)
}

function doMerge(mainArray: number[], startIdx: number, middleIdx: number, endIdx: number, auxiliaryArray: number[], steps: Steps, stepCounter: number) {
  let k = startIdx
  let i = startIdx
  let j = middleIdx + 1

  stepCounter++

  while (i <= middleIdx && j <= endIdx) {
    steps.push({
      array: getStepArray(mainArray, auxiliaryArray, stepCounter),
      prevIdx: i,
      currentIdx: k,
      nextIdx: j
    })

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      mainArray[k++] = auxiliaryArray[j++]
    }
  }

  while(i <= middleIdx) {
    mainArray[k++] = auxiliaryArray[i++]
    steps.push({
      array: getStepArray(mainArray, auxiliaryArray, stepCounter),
      prevIdx: i,
      currentIdx: k,
      nextIdx: j
    })
  }

  while(j <= endIdx) {
    mainArray[k++] = auxiliaryArray[j++]
    steps.push({
      array: getStepArray(mainArray, auxiliaryArray, stepCounter),
      prevIdx: i,
      currentIdx: k,
      nextIdx: j
    })
  }
}

function getStepArray(mainArray: number[], auxiliaryArray: number[], stepCounter: number) {
  return stepCounter % 2 === 0 ? [...mainArray] : [...auxiliaryArray]
}