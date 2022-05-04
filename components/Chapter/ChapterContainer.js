import useAppContext from '../AppContext/useAppContext'
import Chapter from './Chapter'

const returnTitleParts = (chapter, currentLang) => {
  const parts = chapter?.titleParts[currentLang] || chapter?.titleParts.de || []
  return parts.map((part, index) => ({ key: `${currentLang}-${index}`, ...part }))
}

const returnContent = (chapter, currentLang) => (chapter?.content || []).map(({ type, value }, index) => ({
  key: `${type}-${index}`,
  type,
  value: value[currentLang] || value.de || ''
}))

const ChapterContainer = (chapter) => {
  const { currentLang } = useAppContext()
  const titleParts = returnTitleParts(chapter, currentLang)
  const content = returnContent(chapter, currentLang)
  return (
    <Chapter titleParts={titleParts} content={content} />
  )
}

export default ChapterContainer