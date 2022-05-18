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
  height: 300vh;
  padding: 0 0 0 0;
  margin: 0 0 -100vh 0;
`


const Content = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  > div {
    position: relative;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 0 2rem;
    > div {
      position: relative;
      flex: 0 0 auto;
      margin: 2rem 0;
      color: white;
      > img {
        position: relative;
        width: auto;
        height: 70rem;
        &.coverImage {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      > span {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin: 2rem 0;
        width: 80%;
        max-width: 140rem;
        min-width: 90rem;
        text-align: center;
      }
    }
  }
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
        <Content>
          <div onClick={onImageClick}>
            <div>
              <img src={image.src} alt="" />
              {coverImage && showOverlay && (
                <img className='coverImage' src={coverImage.src} alt="" />
              )}
              <span>{image.value}</span>
            </div>
          </div>
          {coverImage?.value && (
            <div style={{ maxWidth: 600 }}>
              <div>
                {coverImage?.value}
              </div>
            </div>
          )}
        </Content>
      </Rail>
    </Wrap>
  )
}

export default Fixed