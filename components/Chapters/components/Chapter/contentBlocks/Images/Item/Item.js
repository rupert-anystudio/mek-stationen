// import Image from 'next/image'
import styled from 'styled-components'
import PillButton from '../../../../../../PillButton'
import Cross from '../../../../../../../svgs/Cross'

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
  right: 0;
  width: 100%;
  /* max-width: 80rem; */
  overflow: hidden;
  height: auto;
`

const Caption = styled.div`
  position: relative;
  background: black;
  color: white;
  border-radius: 1rem;
  margin: 1rem 0 0 0;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
  span {
    white-space: pre-wrap;
    max-width: 90rem;
  }
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
  isActive,
}) => {
  return (
    <Wrap>
      <CaptionWrap ref={captionRef}>
        <Caption onClick={onCaptionHideClick}>
          <span>{value}</span>
          <Cross />
        </Caption>
      </CaptionWrap>
      <ImageWrap style={{ transform: `translateY(${showCaption && isActive ? -captionHeight : 0}px)` }}>
        <Img src={src} />
        {/* <Image src={`/${src}`} layout='responsive' alt='' width={100} height={100} /> */}
        {!showCaption && isActive && (
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