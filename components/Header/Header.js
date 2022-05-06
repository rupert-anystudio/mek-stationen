import styled from 'styled-components'
import BackToStart from '../BackToStart'
import ChapterNav from '../ChapterNav'
import LanguageSwitch from '../LanguageSwitch'

const Wrap = styled.header`
  flex: 0 0 auto;
  width: 100%;
  position: sticky;
  top: 0px;
  margin: 0;
  border-bottom: 2px solid currentColor;
  z-index: 100;
  background: white;
  transform: translateY(${props => props.isHidden ? -100 : 0}%);
  transition: transform 0.3s ease-in-out;
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

const Header = ({ isHidden, isCollapsed }) => {
  return (
    <>
      <Wrap isHidden={isHidden}>
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