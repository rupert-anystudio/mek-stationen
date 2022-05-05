import styled from 'styled-components'

const Wrap = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  max-width: 110rem;
  font-size: 5.5rem;
  line-height: 7rem;
  margin: 0 auto 10rem auto;
`

const Quote = ({ value }) => (
  <Wrap>{value}</Wrap>
)

export default Quote