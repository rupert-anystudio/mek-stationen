import useAppContext from '../AppContext/useAppContext'
import PillButton from '../PillButton'

const BackToStart = () => {
  const { globals } = useAppContext()
  return (
    <PillButton label={globals.backToStart} />
  )
}

export default BackToStart