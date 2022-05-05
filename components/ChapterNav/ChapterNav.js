import styled from 'styled-components'
import ChapterNavEntry from './ChapterNavEntry'

const Wrap = styled.div`
  flex: 1;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`

const ChapterNav = ({ chapters = [], onChapterClick, chapterIndex }) => {
  return (
    <Wrap>
      {chapters.map(({ key, title, index, id }) => {
        return (
          <ChapterNavEntry
            key={key}
            title={title}
            index={index}
            onClick={() => onChapterClick(index)}
            href={`#${id}`}
            isActive={index <= chapterIndex}
            isCurrent={index === chapterIndex}
          />
        )
      })}
    </Wrap>
  )
}

export default ChapterNav