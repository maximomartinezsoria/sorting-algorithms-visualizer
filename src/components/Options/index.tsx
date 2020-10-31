import React from 'react'

interface OptionsProps {
  setRange: React.Dispatch<React.SetStateAction<number>>,
  range: number
}

export const Options: React.FC<OptionsProps> = ({ range, setRange }) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(+e.target.value)
  }

  return (
    <div>
      <button>Bubble Sort</button>
      <button>Insertion Sort</button>
      <button>Selection Sort</button>
      <button>Quick Sort</button>
      <button>Heap Sort</button>
      <button>Merge Sort</button>
      <p>
        <label htmlFor="length">Change array length</label>
        <input
          type="range"
          min={1}
          max={40}
          value={range}
          onChange={handleRangeChange}
        />
      </p>
    </div>
  )
}
