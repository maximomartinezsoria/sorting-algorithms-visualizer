import React, { useEffect, useState } from 'react'
import { Options } from './components/Options'
import { Visualizer } from './components/Visualizer'
import { getArrayOfRandomNumbers } from './helpers'
import { Section } from './styles'
import { Steps } from './types'

export const App: React.FC = () => {
  const [range, setRange] = useState(15)
  const arrayLength = range * 4
  const [array, setArray] = useState(getArrayOfRandomNumbers(arrayLength))
  const [steps, setSteps] = useState<Steps>()
  const [isSorting, setIsSorting] = useState(false)

  useEffect(() => {
    const arrayLength = range * 4
    setArray(getArrayOfRandomNumbers(arrayLength))
  }, [range])

  return (
    <Section>
      <Visualizer array={array} range={range} steps={steps} setArray={setArray} setIsSorting={setIsSorting} />
      <Options setRange={setRange} range={range} array={array} setSteps={setSteps} isSorting={isSorting} setIsSorting={setIsSorting} />
    </Section>
  )
}
