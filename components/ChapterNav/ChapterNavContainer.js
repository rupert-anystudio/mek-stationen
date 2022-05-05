import { useCallback } from 'react'
import useAppContext from '../AppContext/useAppContext'
import ChapterNav from './ChapterNav'

const ChapterNavContainer = () => {
  const { chapters, setChapterIndex, chapterIndex } = useAppContext()

  const handleChapterClick = useCallback(index => {
    setChapterIndex(index)
  }, [setChapterIndex])

  return (
    <ChapterNav
      chapters={chapters}
      onChapterClick={handleChapterClick}
      chapterIndex={chapterIndex}
    />
  )
}

export default ChapterNavContainer