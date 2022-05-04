import styled from 'styled-components'
import SkewedTitleSheet from '../SkewedTitleSheet'

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`

const Chapter = ({ titleSkewed }) => {
  console.log('titleSkewed', titleSkewed)
  if (titleSkewed.length < 1) return null
  return (
    <Wrap>
      <SkewedTitleSheet parts={titleSkewed} />
    </Wrap>
  )
}

export default Chapter