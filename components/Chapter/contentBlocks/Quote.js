import styled from 'styled-components'

const Wrap = styled.div`
  padding: 0 0 10rem 0;
  /* padding: 10rem 0; */
  position: relative;
  width: 100%;
  margin: 0;
  background: white;
  p {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    font-size: 5.5rem;
    line-height: 7rem;
  }
`

const Quote = ({ value }) => (
  <Wrap>
    <p>{value}</p>
  </Wrap>
)

export default Quote