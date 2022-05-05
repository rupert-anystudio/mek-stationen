import useAppContext from '../AppContext/useAppContext'
import Chapters from './Chapters'

const ChaptersContainer = () => {
  const { chapters } = useAppContext()
  return (
    <Chapters chapters={chapters} />
  )
}

export default ChaptersContainer