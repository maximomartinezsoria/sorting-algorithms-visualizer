import { getArrayOfRandomNumbers } from '../../helpers'
import quickSort from '../../algorithms/quickSort'

describe('Quick Sort', () => {
  test('quickSort function and native JavaScript sort, should return the same sorted array', () => {
    const array = getArrayOfRandomNumbers(500)
    const [_, quickSorted] = quickSort(array)
    const nativeSorted = array.sort((a, b) => a - b)

    expect(quickSorted).toEqual(nativeSorted)
  })
})