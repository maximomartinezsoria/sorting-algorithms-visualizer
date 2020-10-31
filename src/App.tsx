import React, { useState } from 'react'

export const App: React.FC = () => {
  const [range, setRange] = useState(25)
  const styles: React.CSSProperties = {
    width: '0.2%',
    margin: '0 1.5px',
    backgroundColor: 'aquamarine',
    display: 'inline-block'
  }

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(+e.target.value)
  }

  const randomArray = (length = 100, max = 150): number[] => [...new Array(length)].map(() => Math.round(Math.random() * max));

  return <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '85vh' }}>
    <div style={{ display: 'flex', height: '75vh', maxWidth: '100%', overflow: 'hidden' }}>
    { randomArray((range + 1) * 4).map((n, i) => {
        const width = `${100 / (range + 1) * 3}%`
        const height = `${100 / (n + 1) + 10}%`
        return <span style={{...styles, height, width}} key={i}></span>
      })
    }
    </div>

    <div>
      <button>Bubble Sort</button>
      <button>Insertion Sort</button>
      <button>Selection Sort</button>
      <button>Quick Sort</button>
      <button>Heap Sort</button>
      <button>Merge Sort</button>

      <p>
        <label htmlFor="length">Change array length</label>
        <input type="range" max={40} onChange={handleRangeChange}/>
        {range}
      </p>
    </div>
  </section>
}
