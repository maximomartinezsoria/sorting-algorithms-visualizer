import { getArrayOfRandomNumbers } from '../../helpers'
import insertionSort from '../../algorithms/insertionSort'

describe('Insertion Sort', () => {
  test('insertionSort function and native JavaScript sort, should return the same sorted array', () => {
    const array = getArrayOfRandomNumbers(500)
    const [_, insertionSorted] = insertionSort(array)
    const nativeSorted = array.sort((a, b) => a - b)

    expect(insertionSorted).toEqual(nativeSorted)
  })
})