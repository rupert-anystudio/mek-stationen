import useAppContext from '../AppContext/useAppContext'
import Chapter from './Chapter'

const ChapterContainer = ({ title, titleSkewed }) => {
  const { currentLang } = useAppContext()
  return (
    <Chapter titleSkewed={titleSkewed[currentLang]} title={title} />
  )
}

export default ChapterContainer