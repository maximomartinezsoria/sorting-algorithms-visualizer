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
  const [currentIdx, setCurrentIdx] = useState(-1)
  const [nextIdx, setNextIdx] = useState(-1)

  useEffect(() => {
    steps?.forEach((step, idx) => {
      setTimeout(() => {
        setArray(step.array)
        setCurrentIdx(step.currentIdx)
        setNextIdx(step.nextIdx)
      }, 100 * (idx + 1))
    })
  }, [steps])

  return (
    <Chart>
      {
        array.map((number, idx) => {
          const width = getWidth(range)
          const height = getHeight(number)
          let backgroundColor = 'aquamarine'
          if (currentIdx == idx) backgroundColor = 'blue'
          if (nextIdx == idx) backgroundColor = 'red'

          return <Bar style={{ height, width, backgroundColor }} key={idx} />
        })
      }
    </Chart >
  )
}
