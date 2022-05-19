import useAppContext from '../AppContext/useAppContext'
import useScrollTriggerAnimations from '../useScrollTriggerAnimations'
import Chapters from './Chapters'

const ChaptersContainer = () => {
  const { chapters } = useAppContext()

  useScrollTriggerAnimations()

  return (
    <Chapters chapters={chapters} />
  )
}

export default ChaptersContainer