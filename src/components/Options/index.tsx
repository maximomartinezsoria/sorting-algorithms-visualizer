import React from 'react'
import { Steps, SortFunction } from '../../types'
import { buttons } from './buttons'
import { Container, ButtonsWrapper, Button } from './styles'

export interface OptionsProps {
  setRange: React.Dispatch<React.SetStateAction<number>>,
  range: number,
  array: number[],
  setSteps: React.Dispatch<React.SetStateAction<Steps | undefined>>,
  isSorting: boolean,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>
}

export const Options: React.FC<OptionsProps> = ({ range, setRange, array, setSteps, isSorting, setIsSorting }) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(+e.target.value)
  }

  const onClick = (sortFunction: SortFunction) => () => {
    setIsSorting(true)
    const [steps] = sortFunction(array)
    setSteps(steps)
  }

  return (
    <Container>
      <p>
        <label htmlFor="length">Change array length</label>
        <input
          type="range"
          min={1}
          max={30}
          value={range}
          onChange={handleRangeChange}
          disabled={isSorting}
        />
      </p>

      <ButtonsWrapper>
        {
          buttons.map(({ text, sortFunction }, idx) => <Button key={idx} onClick={onClick(sortFunction)} disabled={isSorting}>{text}</Button>)
        }
      </ButtonsWrapper>
    </Container>
  )
}
