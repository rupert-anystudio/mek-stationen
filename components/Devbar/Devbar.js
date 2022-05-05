import styled from 'styled-components'
import ChapterSelect from './ChapterSelect'

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 100;
  background: rgba(0,0,0,0.8);
  color: white;
`

const Content = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`

const Devbar = () => {
  return (
    <Wrap>
      <Content>
        <ChapterSelect />
      </Content>
    </Wrap>
  )
}

export default Devbar