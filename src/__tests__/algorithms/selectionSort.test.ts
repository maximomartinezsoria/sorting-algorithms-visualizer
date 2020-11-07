import { getArrayOfRandomNumbers } from '../../helpers'
import selecionSort from '../../algorithms/selectionSort'

describe('Selection Sort', () => {
  test('selectionSort function and native JavaScript sort, should return the same sorted array', () => {
    const array = getArrayOfRandomNumbers(500)
    const [_, selectionSorted] = selecionSort(array)
    const nativeSorted = array.sort((a, b) => a - b)

    expect(selectionSorted).toEqual(nativeSorted)
  })
})