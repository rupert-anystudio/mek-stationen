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
  z-index: 100;
  transform: translateY(${props => props.isHidden ? -100 : 0}%);
  transition: transform 0.3s ease-in-out;
`

const Background = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  border-bottom: 2px solid currentColor;
`

const Content = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6rem;
`

const Header = ({
  isHidden,
  titleRefs,
  indexRefs,
  backgroundRef
}) => {
  return (
    <>
      <Wrap isHidden={isHidden}>
        <Background ref={backgroundRef} />
        <Content>
          <LanguageSwitch />
          <ChapterNav indexRefs={indexRefs} titleRefs={titleRefs} />
          <BackToStart />
        </Content>
      </Wrap>
    </>
  )
}

export default Header