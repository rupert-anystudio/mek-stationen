import styled from 'styled-components'
import SkewedTitleSheet from '../SkewedTitleSheet'

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`

const Text = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  max-width: 110rem;
  font-size: 3.8rem;
  line-height: 5.3rem;
  margin: 0 auto 23rem auto;
`

const Quote = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  max-width: 110rem;
  font-size: 5.5rem;
  line-height: 7rem;
  margin: 0 auto 10rem auto;
`

const Chapter = ({ titleParts, content }) => {
  return (
    <Wrap>
      {titleParts.length > 0 && <SkewedTitleSheet parts={titleParts} />}
      {content.map(({ type, value, key }) => {
        if (type === 'text') return <Text key={key}>{value}</Text>
        if (type === 'quote') return <Quote key={key}>{value}</Quote>
        return null
      })}
    </Wrap>
  )
}

export default Chapter