import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  color: white;
  &:after {
    content: '';
    position: relative;
    width: 100%;
    height: 12rem;
    display: block;
    background: white;
  }
`

const Rail = styled.div`
  position: relative;
  background: black;
  width: 100%;
  height: 200vh;
  padding: 0 0 0 0;
  margin: 0 0 -100vh 0;
`

const Sticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ImageCol = styled.div`
  height: auto;
  width: 40rem;
  position: relative;
  > div {
    width: 100%;
    position: relative;
    height: auto;
  }
  > span {
    display: block;
    text-align: center;
    padding: 0 2rem;
    margin: 1rem 0 0 0;
  }
`

const TextCol = styled.div`
  height: auto;
  width: 40rem;
  position: relative;
  margin-left: 4rem;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Fixed = ({
  image,
  coverImage,
  showOverlay,
  onImageClick,
  wrapperRef,
}) => {
  return (
    <Wrap ref={wrapperRef}>
      <Rail>
        <Sticky>
          <ImageCol onClick={onImageClick}>
            <div>
              <Image src={image.src} alt="" />
              {coverImage && showOverlay && (
                <CoverImage src={coverImage.src} alt="" />
              )}
            </div>
            <span>{image.value}</span>
          </ImageCol>
          {coverImage?.value && (
            <TextCol>
              {coverImage?.value}
            </TextCol>
          )}
        </Sticky>
      </Rail>
    </Wrap>
  )
}

export default Fixed