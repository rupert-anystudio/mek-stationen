import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 200vh;
  background: black;
  margin: 0 0 17rem 0;
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
      <Sticky>
        {image && (
          <ImageColumn {...image} />
        )}
      </Sticky>
    </Wrap>
  )
}

export default Fixed