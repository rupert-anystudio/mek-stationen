import { useCallback } from 'react'
import useAppContext from '../../../AppContext/useAppContext'
import LanguageSwitch from './LanguageSwitch'

const LanguageSwitchContainer = () => {
  const { langs, currentLang, setCurrentLang } = useAppContext()

  const handleLangSelect = useCallback(lang => {
    setCurrentLang(lang)
  }, [setCurrentLang])

  return (
    <LanguageSwitch
      langs={langs}
      currentLang={currentLang}
      onLangSelect={handleLangSelect}
    />
  )
}

export default LanguageSwitchContainer