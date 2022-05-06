import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
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
  height: 250vh;
  padding: 50vh 0 0 0;
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

const ImageWrap = styled.div`
  height: auto;
  width: 40rem;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  span {
    display: block;
    color: white;
    text-align: center;
    padding: 0 2rem;
    margin: 1rem 0 0 0;
  }
`

const ImageColumn = ({ src, value }) => {
  return (
    <ImageWrap>
      <img src={src} />
      <span>{value}</span>
    </ImageWrap>
  )
}

const Fixed = ({ image, coverImage, value }) => {
  return (
    <Wrap>
      <Rail>
        <Sticky>
          {image && (
            <ImageColumn {...image} />
          )}
        </Sticky>
      </Rail>
    </Wrap>
  )
}

export default Fixed