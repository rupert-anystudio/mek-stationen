import styled from 'styled-components'
import fontstyles from '../../../../../../styles/fontstyles'

import Scrollpfeil from '../../../../../../svgs/Scrollpfeil'

const Wrap = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 0 12rem 0;
  overflow: hidden;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Skew = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
  transform: skewY(-29.5deg) scaleX(0.8);
  transform-origin: 50% 50%;
`

const Part = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 8vw;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  white-space: pre;
  padding-left: ${props => props.offset}em;
  letter-spacing: -0.02sem;
  ${fontstyles.title}
`

const ScrollIndicator = styled(Scrollpfeil)`
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
`

const SkewedTitleSheet = ({ parts = [] }) => (
  <Wrap>
    <Center>
      <Skew>
        {parts.map(({ key, offset, value }) => (
          <Part key={key} offset={offset}>{value}</Part>
        ))}
      </Skew>
    </Center>
    <ScrollIndicator />
  </Wrap>
)

export default SkewedTitleSheet