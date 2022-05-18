import styled from 'styled-components'

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
  background: grey;
  color: white;
`

const StaticStart = ({ onClick }) => {
  return (
    <StaticStartWrap onClick={onClick}>
      <button>
        START
      </button>
    </StaticStartWrap>
  )
}

export default StaticStart