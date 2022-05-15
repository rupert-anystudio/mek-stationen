import styled from 'styled-components'
import PillButton from '../../../../../../PillButton'

const Wrap = styled.div`
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

const CaptionWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: auto;
`

const Caption = styled.div`
  position: relative;
  width: 100%;
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem 0 0 0;
  cursor: pointer;
  white-space: pre-wrap;
`

const Item = ({
  src,
  value,
  onCaptionShowClick,
  onCaptionHideClick,
  showCaption,
  captionRef,
  captionHeight,
  captionToggleLabel,
}) => {
  return (
    <Wrap>
      <CaptionWrap ref={captionRef}>
        <Caption onClick={onCaptionHideClick}>{value}</Caption>
      </CaptionWrap>
      <ImageWrap style={{ transform: `translateY(${showCaption ? -captionHeight : 0}px)` }}>
        <Img src={src} />
        {!showCaption && (
          <CaptionButton
            label={captionToggleLabel}
            onClick={onCaptionShowClick}
          />
        )}
      </ImageWrap>
    </Wrap>
  )
}

export default Item