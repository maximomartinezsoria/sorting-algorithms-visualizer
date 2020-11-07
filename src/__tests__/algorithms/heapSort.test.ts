import { getArrayOfRandomNumbers } from '../../helpers'
import heapSort from '../../algorithms/heapSort'

describe('Heap Sort', () => {
  test('heapSort function and native JavaScript sort, should return the same sorted array', () => {
    const array = getArrayOfRandomNumbers(500)
    const [_, heapSorted] = heapSort(array)
    const nativeSorted = array.sort((a, b) => a - b)

    expect(heapSorted).toEqual(nativeSorted)
  })
})