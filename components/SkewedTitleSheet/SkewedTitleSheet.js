import styled from 'styled-components'

const Wrap = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  margin: 0 auto 17rem auto;
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
  transform: skewY(-29.5deg) scaleX(0.8);
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
`

const SkewedTitleSheet = ({ parts = [] }) => (
  <Wrap>
    <Center>
      <Skew>
        {parts.map(({ offset, value }) => (
          <Part offset={offset}>{value}</Part>
        ))}
      </Skew>
    </Center>
  </Wrap>
)

export default SkewedTitleSheet