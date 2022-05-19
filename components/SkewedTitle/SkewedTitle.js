import styled from 'styled-components'
import { gsap } from 'gsap'
import fontstyles from '../../styles/fontstyles'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  white-space: pre;
  letter-spacing: -0em;
  ${fontstyles.title}
  /* font-size: 12vw; */
  font-size: 21rem;
  line-height: 0.9;
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

const TitleParts = styled.div`
  position: relative;
  display: flex;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;
  span {
    color: currentColor;
  }
`

const SkewedTitle = ({ parts = [], className, style }) => {
  return (
    <Wrap
      className={className}
      style={style}
    >
      <Center>
        <Skew>
          <TitleParts>
            {parts.map((part, i) => {
              const balanceX = gsap.utils.interpolate(
                parts.length * -115,
                parts.length * 115,
                (i / (parts.length - 1))
              )
              return (
                <span key={part.key} style={{ transform: `translateX(${balanceX}px)` }}>
                  {part.value}
                </span>
              )
            })}
          </TitleParts>
        </Skew>
      </Center>
    </Wrap>
  )
}

export default SkewedTitle