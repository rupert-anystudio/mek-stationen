import styled from 'styled-components'
import ChapterSelect from './ChapterSelect'
import HeaderCollapsedToggle from './HeaderCollapsedToggle'
import HeaderHiddenToggle from './HeaderHiddenToggle'

const isDev = process.env.NODE_ENV === 'development'

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
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
`

const Devbar = () => {
  if (!isDev) return null
  return (
    <Wrap>
      <Content>
        <ChapterSelect />
        <HeaderHiddenToggle />
        <HeaderCollapsedToggle />
      </Content>
    </Wrap>
  )
}

export default Devbar