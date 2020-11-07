import bubbleSort from '../../algorithms/bubbleSort'
import insertionSort from '../../algorithms/insertionSort'
import quickSort from '../../algorithms/quickSort'
import selectionSort from '../../algorithms/selectionSort'
import { SortFunction } from '../../types'

interface ButtonsI {
  text: string,
  sortFunction: SortFunction
}

export const buttons: ButtonsI[] = [
  { text: 'Bubble Sort', sortFunction: bubbleSort },
  { text: 'Insertion Sort', sortFunction: insertionSort },
  { text: 'Selection Sort', sortFunction: selectionSort },
  { text: 'Quick Sort', sortFunction: quickSort },
  { text: 'Heap Sort', sortFunction: bubbleSort },
  { text: 'Merge Sort', sortFunction: bubbleSort },
]