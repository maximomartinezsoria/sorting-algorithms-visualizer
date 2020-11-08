import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const RangeContainer = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  width: 30%;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 30px;
  }

  label {
    margin-right: 10px;
  }
`

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  justify-content: end;
  align-items: center;
  width: 70%;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`

export const Button = styled.button`
  border-radius: 0.375rem;
  background-color: ${props => props.theme['indigo-600']};
  padding: .5rem 1rem;
  border: 1px solid transparent;
  font-weight: 500;
  color: #fff;
  transition: background-color 150ms ease-in-out;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme['indigo-500']};
  }

  &:focus {
    background-color: ${props => props.theme['indigo-700']};
    box-shadow: 0 0 0 3px ${props => props.theme['indigo-700']};
    outline: none;
  }

  &:active {
    background-color: ${props => props.theme['indigo-700']};
  }

  &:disabled {
    background-color: ${props => props.theme['indigo-200']};
  }
`

Button.defaultProps = {
  // from tailwind colors
  theme: {
    'indigo-200': '#c3dafe',
    'indigo-500': '#667eea',
    'indigo-600': '#5a67d8',
    'indigo-700': '#4c51bf'
  }
}