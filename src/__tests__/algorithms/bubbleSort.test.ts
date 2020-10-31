import { getArrayOfRandomNumbers } from '../../helpers'
import bubbleSort from '../../algorithms/bubbleSort'

describe('Bubble Sort', () => {[
  test('bubbleSort function and native JavaScript sort, should return the same sorted array', () => {
    const array = getArrayOfRandomNumbers(1000)
    const bubbleSorted = bubbleSort(array)
    const nativeSorted = array.sort((a, b) => a - b)

    expect(bubbleSorted).toEqual(nativeSorted)
  })
]})