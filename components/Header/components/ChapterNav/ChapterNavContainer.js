import { useCallback } from 'react'
import useAppContext from '../../../AppContext/useAppContext'
import ChapterNav from './ChapterNav'

const ChapterNavContainer = ({ indexRefs, titleRefs, labelRef }) => {
  const { chapters, setChapterIndex, chapterIndex, globals } = useAppContext()

  const handleChapterClick = useCallback(index => {
    // setChapterIndex(index)
  }, [])

  return (
    <ChapterNav
      chapters={chapters}
      onChapterClick={handleChapterClick}
      chapterIndex={chapterIndex}
      navLabel={globals.chapterNavLabel}
      indexRefs={indexRefs}
      titleRefs={titleRefs}
      labelRef={labelRef}
    />
  )
}

export default ChapterNavContainer