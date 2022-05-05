import { useCallback } from 'react'
import useAppContext from '../AppContext/useAppContext'

const ChapterSelect = () => {
  const { chapters, chapterIndex, setChapterIndex } = useAppContext()
  const handleChange = useCallback(e => {
    const value = parseInt(e.target.value)
    console.log('handleChange', value)
    setChapterIndex(value)
  }, [setChapterIndex])
  return (
    <div>
      <select value={chapterIndex} onChange={handleChange}>
        {chapters.map((chapter, i) => {
          return (
            <option
              key={chapter.key}
              value={i + 1}>
              {chapter.key}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ChapterSelect