import styled from 'styled-components'

import Play from '../../../../../../../../svgs/Play'

const StaticStartWrap = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0.6);
  color: white;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object: contain;
  }
  svg {
    position: relative;
  }
`

const StaticStart = ({ onClick, image }) => {
  return (
    <StaticStartWrap onClick={onClick}>
      <img src={image} alt="" />
      <Play />
    </StaticStartWrap>
  )
}

export default StaticStart