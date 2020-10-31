interface ButtonInfoI {
  text: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const buttonsInfo: ButtonInfoI[] = [
  { text: 'Bubble Sort', onClick: () => { console.log('Bubble Sort') } },
  { text: 'Insertion Sort', onClick: () => { console.log('Insertion Sort') } },
  { text: 'Selection Sort', onClick: () => { console.log('Selection Sort') } },
  { text: 'Quick Sort', onClick: () => { console.log('Quick Sort') } },
  { text: 'Heap Sort', onClick: () => { console.log('Heap Sort') } },
  { text: 'Merge Sort', onClick: () => { console.log('Merge Sort') } },
]