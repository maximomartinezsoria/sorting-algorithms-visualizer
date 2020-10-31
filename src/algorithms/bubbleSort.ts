/*
* Bubble Sort
* O(n^2) Time / O(1) Space
*/
export default function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }

  return array
}