import styled from 'styled-components'
import Chapter from './components/Chapter'
import Tail from './components/Tail'

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`

const Chapters = ({ chapters = [] }) => (
  <Wrap>
    {chapters.map(({ key, ...chapter }) => {
      return (
        <Chapter
          key={key}
          {...chapter}
          name={key}
        />
      )
    })}
    <Tail />
  </Wrap>
)

export default Chapters