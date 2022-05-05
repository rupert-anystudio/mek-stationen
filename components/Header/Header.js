import styled from 'styled-components'
import BackToStart from '../BackToStart'
import ChapterNav from '../ChapterNav'
import LanguageSwitch from '../LanguageSwitch'

const Intro = styled.div`
  flex: 0 0 auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 100;
  background: black;
  height: 80vh;
`

const Wrap = styled.header`
  flex: 0 0 auto;
  width: 100%;
  position: sticky;
  top: 0px;
  margin: 0;
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
  align-items: flex-start;
  gap: 6rem;
`

const Header = () => {
  return (
    <>
      {/* <Intro /> */}
      <Wrap>
        <Content>
          <LanguageSwitch />
          <ChapterNav />
          <BackToStart />
        </Content>
      </Wrap>
    </>
  )
}

export default Header