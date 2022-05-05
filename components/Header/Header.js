import styled from 'styled-components'
import BackToStart from '../BackToStart'
import ChapterNav from '../ChapterNav'
import LanguageSwitch from '../LanguageSwitch'

const Wrap = styled.header`
  flex: 0 0 auto;
  width: 100%;
  overflow: hidden;
  position: sticky;
  top: 0;
  border-bottom: 2px solid currentColor;
  z-index: 100;
  background: white;
`

const Content = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
`

const Header = () => {
  return (
    <Wrap>
      <Content>
        <LanguageSwitch />
        <ChapterNav />
        <BackToStart />
      </Content>
    </Wrap>
  )
}

export default Header