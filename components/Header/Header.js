import styled from 'styled-components'
import BackToStart from './components/BackToStart'
import ChapterNav from './components/ChapterNav'
import LanguageSwitch from './components/LanguageSwitch'
// import StationTitle from './components/StationTitle'

const Wrap = styled.header`
  width: 100%;
  position: sticky;
  top: 0px;
  margin: 0;
  /* transform: translateY(${props => props.isHidden ? -100 : 0}%);
  transition: transform 0.3s ease-in-out; */
  pointer-events: none;
  height: auto;
  z-index: 1000;
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
  pointer-events: auto;
`

const Content = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  > * {
    &:not(:last-child) {
      margin-right: 6rem;
    }
  }
  button, a {
    pointer-events: auto;
  }
`

const Header = ({
  isHidden,
  isCollapsed,
  titleRefs,
  indexRefs,
  backgroundRef,
  onBackgroundClick,
  backToStartRef,
}) => {
  return (
    <>
      {/* <StationTitle /> */}
      <Wrap isHidden={isHidden}>
        <Background
          ref={backgroundRef}
          onClick={onBackgroundClick}
        />
        <Content>
          <LanguageSwitch />
          <ChapterNav
            indexRefs={indexRefs}
            titleRefs={titleRefs}
          />
          <BackToStart
            ref={backToStartRef}
          />
        </Content>
      </Wrap>
    </>
  )
}

export default Header