import { getArrayOfRandomNumbers } from '../../helpers'
import mergeSort from '../../algorithms/mergeSort'

describe('Merge Sort', () => {
  test('mergeSort function and native JavaScript sort, should return the same sorted array', () => {
    const array = getArrayOfRandomNumbers(500)
    const [_, mergeSorted] = mergeSort(array)
    const nativeSorted = array.sort((a, b) => a - b)

    expect(mergeSorted).toEqual(nativeSorted)
  })
})