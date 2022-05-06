import styled from 'styled-components'
import PillButton from '../../../PillButton'

const ItemWrap = styled.div`
  height: 100%;
  width: auto;
  position: relative;
`

const ImageWrap = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  will-change: transform;
  transition: transform 0.3s ease-in-out;
`

const Img = styled.img`
  width: auto;
  height: 100%;
`

const CaptionButton = styled(PillButton)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem 0 0 0;
  cursor: pointer;
`

const ImagesItem = ({ src, value, onCaptionShowClick, onCaptionHideClick, showCaption }) => {
  return (
    <ItemWrap>
      <Caption onClick={onCaptionHideClick}>{value}</Caption>
      <ImageWrap style={{ transform: `translateY(${showCaption ? -150 : 0}px)` }}>
        <Img src={src} />
        <CaptionButton label="Bildinfos" onClick={onCaptionShowClick} isActive={showCaption} />
      </ImageWrap>
    </ItemWrap>
  )
}

export default ImagesItem