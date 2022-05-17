import styled from 'styled-components'

const Wrap = styled.div`
  padding: 0 0 12rem 0;
  /* padding: 10rem 0; */
  position: relative;
  width: 100%;
  margin: 0;
  background: white;
  p {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    font-size: 3.8rem;
    line-height: 5.3rem;
  }
`

const Text = ({ value }) => (
  <Wrap>
    <p className='appearingText'>{value}</p>
  </Wrap>
)

export default Text