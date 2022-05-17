import styled from 'styled-components'
import { gsap } from 'gsap'
import { useTransition, animated } from 'react-spring'
import fontstyles from '../../../../styles/fontstyles'

const Wrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 8vw;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  white-space: pre;
  letter-spacing: -0.02em;
  ${fontstyles.title}
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
  text-transform: uppercase;
  font-weight: bold;
  white-space: pre;
  letter-spacing: -0.02em;
  transform: translateX(${props => props.balanceX}px);
  ${fontstyles.title}
`

const StationTitle = ({ parts = [], onTitleClick }) => {

  const transitions = useTransition(parts, {
    keys: part => part.key,
    // initial: {
    //   transform: p => `translateX(${500}px) translateY(${p.balanceY}px)`,
    // },
    // from: {
    //   transform: `translateX(0px)`,
    // },
    config: { mass: 2, tension: 100, friction: 20 },
    initial: item => ({
      color: `rgba(0,0,0,0)`,
    }),
    from: item => ({
      x: 300,
      y: item.y,
      color: `rgba(0,0,0,0)`,
    }),
    enter: item => ({
      x: 0,
      y: item.y,
      color: `rgba(0,0,0,1)`,
    }),
    leave: item => ({
      x: -300,
      y: item.y,
      color: `rgba(0,0,0,0)`,
    }),
    delay: 50,
    trail: 120,
  })

  return (
    <Wrap onClick={onTitleClick}>
      {transitions((props, part) => (
        <Center>
          <animated.div style={props}>
            <div>
              {part.value}
            </div>
          </animated.div>
        </Center>
      ))}
      {/* <Center>
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
      </Center> */}
    </Wrap>
  )
}

export default StationTitle