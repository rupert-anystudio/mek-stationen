import useAppContext from '../AppContext/useAppContext'
import PillButton from '../PillButton'

const labels = {
  de: 'Zurück zum Anfang',
  en: 'Back to start',
}

const BackToStart = () => {
  const { currentLang } = useAppContext()
  return (
    <PillButton label={labels[currentLang]} />
  )
}

export default BackToStart