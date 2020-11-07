import React, { useEffect, useState } from 'react'
import { Steps } from '../../types'
import { Chart, Bar } from './styles'
import { getWidth, getHeight } from './helpers'

interface VisualizerProps {
  array: number[],
  steps: Steps | undefined,
  range: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
}

export const Visualizer: React.FC<VisualizerProps> = ({ array, steps, range, setArray }) => {
  const [prevIdx, setPrevIdx] = useState(-1)
  const [currentIdx, setCurrentIdx] = useState(-1)
  const [nextIdx, setNextIdx] = useState(-1)
  const [baseSpeed, setBaseSpeed] = useState(50)

  const resetIdxs = () => {
    setPrevIdx(-1)
    // If currentIdx is -2 all the bars are gonna change colors to indicate that the algorithm is over
    setCurrentIdx(-2) 
    setNextIdx(-1)
  }

  useEffect(() => {
    steps?.forEach((step, idx) => {
      setTimeout(() => {
        setArray(step.array)
        setCurrentIdx(step.currentIdx)
        if(step.prevIdx) setPrevIdx(step.prevIdx)
        if(step.nextIdx) setNextIdx(step.nextIdx)

        const finalStep = idx === steps.length - 1
        if (finalStep) resetIdxs()
      }, baseSpeed * (idx + 1))
    })
  }, [steps])

  useEffect(() => {
    if (currentIdx === -2) setCurrentIdx(-1)
    if (range > 15) {
      setBaseSpeed(50)
    } else {
      setBaseSpeed(100)
    }
  }, [range])

  return (
    <Chart>
      {
        array.map((number, idx) => {
          const width = getWidth(range)
          const height = getHeight(number)
          let backgroundColor = 'aquamarine'
          if (prevIdx === idx) backgroundColor = 'purple'
          if (currentIdx === idx) backgroundColor = 'blue'
          if (nextIdx === idx) backgroundColor = 'red'
          if (currentIdx === -2) backgroundColor = 'violet'

          return <Bar style={{ height, width, backgroundColor }} key={idx} />
        })
      }
    </Chart >
  )
}
