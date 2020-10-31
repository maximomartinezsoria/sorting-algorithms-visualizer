import React from 'react'
import { getArrayOfRandomNumbers } from '../../helpers'
import { Chart, Bar } from './styles'

interface VisualizerProps {
  range: number
}

export const Visualizer: React.FC<VisualizerProps> = ({ range }) => {
  const arrayLength = range * 4

  return (
    <Chart>
      {getArrayOfRandomNumbers(arrayLength).map((n, i) => {
        const width = `${(100 / range) * 3}%`
        const height = `${100 / (n + 1) + 10}%`
        return <Bar style={{ height, width }} key={i}></Bar>
      })}
    </Chart>
  )
}
