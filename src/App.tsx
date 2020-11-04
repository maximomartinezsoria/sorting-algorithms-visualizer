import React, { useEffect, useState } from 'react'
import { Options } from './components/Options'
import { Visualizer } from './components/Visualizer'
import { getArrayOfRandomNumbers } from './helpers'
import { Section } from './styles'
import { Steps } from './types'

export const App: React.FC = () => {
  const [range, setRange] = useState(25)
  const arrayLength = range * 4
  const [array, setArray] = useState(getArrayOfRandomNumbers(arrayLength))
  const [steps, setSteps] = useState<Steps>()

  useEffect(() => {
    const arrayLength = range * 4
    setArray(getArrayOfRandomNumbers(arrayLength))
  }, [range])

  return (
    <Section>
      <Visualizer array={array} range={range} steps={steps} setArray={setArray} />
      <Options setRange={setRange} range={range} array={array} setSteps={setSteps} />
    </Section>
  )
}
