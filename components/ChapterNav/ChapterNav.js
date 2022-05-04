import styled from 'styled-components'
import ChapterNavEntry from './ChapterNavEntry'

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`

const ChapterNav = ({ chapters = [] }) => {
  return (
    <Wrap>
      {chapters.map(({ key, title }, index) => {
        return (
          <ChapterNavEntry
            key={key}
            title={title}
            index={index + 1}
          />
        )
      })}
    </Wrap>
  )
}

export default ChapterNav