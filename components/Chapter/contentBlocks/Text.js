import styled from 'styled-components'

const Wrap = styled.div`
  padding: 0;
  position: relative;
  width: 100%;
  max-width: 110rem;
  font-size: 3.8rem;
  line-height: 5.3rem;
  margin: 0 auto 23rem auto;
`

const Text = ({ value }) => (
  <Wrap>{value}</Wrap>
)

export default Text