import styled from 'styled-components'
import { css } from 'styled-components'

const Wrap = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Index = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  background: white;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.7rem;
  line-height: 1em;
  font-weight: bold;
  background: ${props => props.isInverted ? 'black' : 'white'};
  color: ${props => props.isInverted ? 'white' : 'black'};
  ${props => props.hasCircle && css`
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5.5rem;
      height: 5.5rem;
      transform: translateX(-50%) translateY(-50%);
      border: 2px dotted black;
      border-radius: 50%;
    }
  `}
`

const Title = styled.div`
  color: currentColor;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const ChapterNavEntry = ({ title, index, isActive, isCurrent, onClick, wrapRef }) => {
  return (
    <Wrap onClick={onClick} ref={wrapRef}>
      <Index isInverted={isActive} hasCircle={isCurrent}>{index}</Index>
      <Title>{title}</Title>
    </Wrap>
  )
}

export default ChapterNavEntry