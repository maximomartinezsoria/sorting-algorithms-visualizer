import React, { useState } from 'react'
import { Options } from './components/Options'
import { Visualizer } from './components/Visualizer'
import { Section } from './styles'

export const App: React.FC = () => {
  const [range, setRange] = useState(25)

  return (
    <Section>
      <Visualizer range={range} />
      <Options setRange={setRange} range={range} />
    </Section>
  )
}
