import { useAppContext } from '../../AppContext'

const LangToggle = () => {
  const { currentLang, onLangCycle } = useAppContext()

  return (
    <div>
      <span onClick={onLangCycle}>{`currentLang: ${currentLang}`}</span>
    </div>
  )
}

export default LangToggle