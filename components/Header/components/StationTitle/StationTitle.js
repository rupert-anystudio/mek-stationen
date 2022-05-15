import styled from 'styled-components'
import { gsap } from 'gsap'
import { useTransition, animated } from 'react-spring'
import fontstyles from '../../../../styles/fontstyles'

const Wrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`

const Skew = styled.div`
  position: relative;
  transform: skewY(-29.5deg) scaleX(0.8);
  transform-origin: 50% 50%;
`

const Title = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background: grey;
  width: auto;
  height: auto;
`

const Line = styled.div`
  position: relative;
  background: yellow;
  font-size: 8vw;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  white-space: pre;
  letter-spacing: -0.02em;
  transform: translateX(${props => props.balanceX}px);
  ${fontstyles.title}
`


const LineTransition = ({ children, balanceX, value }) => {

  const items = children
    ? [{ key: value, value, balanceX }]
    : []

  const transitions = useTransition(items, {
    keys: item => item.key,
    initial: {
      transform: 'translateX(500px) scale(1)',
    },
    from: {
      transform: 'translateX(500px) scale(1)',
    },
    enter: {
      transform: 'translateX(0%) scale(1)',
    },
    leave: {
      transform: 'translateX(-500px) scale(1)',
      position: 'absolute',
    },
    trail: 0,
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Line style={{ transform: `translateX(${item.balanceX}px)` }}>
        {item.value}
      </Line>
    </animated.div>
  ))
}

const StationTitle = ({ parts = [], onTitleClick }) => {
  return (
    <Wrap>
      <Center>
        <Skew>
          <Title>
            {parts.map((part, i) => {
              const balanceX = gsap.utils.interpolate(
                parts.length * -120,
                parts.length * 120,
                (i / (parts.length - 1))
              )
              // console.log('step', step)
              return (
                <LineTransition key={part.key} balanceX={balanceX} value={part.value}>
                  <span onClick={onTitleClick}>
                    {part.value}
                  </span>
                </LineTransition>
              )
            })}
          </Title>
        </Skew>
      </Center>
    </Wrap>
  )
}

export default StationTitle