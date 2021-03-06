import styled from 'styled-components'
import fontstyles from '../../../../styles/fontstyles'
import ChapterNavEntry from './ChapterNavEntry'

const Wrap = styled.div`
  flex: 1;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  > * {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  /* gap: 1rem; */
`

const Label = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  padding: 1.1rem 0;
  white-space: pre;
  ${fontstyles.title}
  min-width: 20rem;
`

const ChapterNav = ({ 
  chapters = [],
  onChapterClick,
  chapterIndex,
  navLabel,
  indexRefs,
  titleRefs,
  labelRef,
}) => {
  return (
    <Wrap>
      <Label ref={labelRef}>{navLabel}</Label>
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
            setIndexRef={c => indexRefs.current[index] = c}
            setTitleRef={c => titleRefs.current[index] = c}
          />
        )
      })}
    </Wrap>
  )
}

export default ChapterNav