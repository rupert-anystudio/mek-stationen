import useAppContext from '../AppContext/useAppContext'
import ChapterNav from './ChapterNav'

const ChapterNavContainer = () => {
  const { chapters } = useAppContext()

  return (
    <ChapterNav
      chapters={chapters}
    />
  )
}

export default ChapterNavContainer