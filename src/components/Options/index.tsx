import React from 'react'
import { buttonsInfo } from './buttonsInfo'
import { Container, ButtonsWrapper, Button } from './styles'

interface OptionsProps {
  setRange: React.Dispatch<React.SetStateAction<number>>,
  range: number
}

export const Options: React.FC<OptionsProps> = ({ range, setRange }) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(+e.target.value)
  }

  return (
    <Container>
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

      <ButtonsWrapper>
        {
          buttonsInfo.map(({ text, onClick }, idx) => <Button key={idx} onClick={onClick}>{text}</Button>)
        }
      </ButtonsWrapper>
    </Container>
  )
}
