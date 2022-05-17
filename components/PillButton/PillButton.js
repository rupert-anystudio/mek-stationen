import { forwardRef } from 'react'
import styled from 'styled-components'
import fontstyles from '../../styles/fontstyles'

const Wrap = styled.button`
  margin: 0;
  padding: 0;
  appearance: none;
  outline: none;
  background: ${props => props.isActive ? 'black' : 'white'};
  color: ${props => props.isActive ? 'white' : 'black'};
  border: 2px solid black;
  padding: 1rem 2rem;
  border-radius: 2.4rem;
  cursor: pointer;
  font-size: 3.2rem;
  ${fontstyles.title}
`

const PillButton = ({
  label,
  onClick,
  isActive,
  style,
  className,
}, ref) => {
  return (
    <Wrap
      ref={ref}
      onClick={onClick}
      isActive={isActive}
      className={className}
      style={style}
    >
      {label}
    </Wrap>
  )
}

export default forwardRef(PillButton)