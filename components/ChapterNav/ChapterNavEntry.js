import styled from 'styled-components'

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`

const Index = styled.div`
  width: 4rem;
  height: 4rem;
  background: white;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.7rem;
  line-height: 1em;
  font-weight: bold;
`

const Title = styled.div`
  color: currentColor;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const Chapter = ({ title, index }) => {
  return (
    <Wrap>
      <Index>{index}</Index>
      <Title>{title}</Title>
    </Wrap>
  )
}

export default Chapter