import styled from 'styled-components'
import Scrollpfeil from '../../../../../../svgs/Scrollpfeil'
import SkewedTitle from '../../../../../SkewedTitle'

const Wrap = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 108rem;
  margin: 0 0 12rem 0;
  overflow: hidden;
  background: white;
  color: black;
`

const ScrollIndicator = styled(Scrollpfeil)`
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
`

const SkewedTitleSheet = ({ parts = [] }) => (
  <Wrap>
    <SkewedTitle parts={parts} />
    <ScrollIndicator />
  </Wrap>
)

export default SkewedTitleSheet