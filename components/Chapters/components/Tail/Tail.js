import styled from 'styled-components'
import BackToStart from '../../../BackToStart'

const Wrap = styled.div`
  margin: 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 24rem 2rem;
`

const Tail = () => {
  return (
    <Wrap>
      <BackToStart isCircle />
    </Wrap>
  )
}

export default Tail
