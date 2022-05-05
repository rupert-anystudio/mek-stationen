import { useState } from 'react'
import translateChapters from '../../lib/translateChapters'
import AppContext from './AppContext'

const langs = [
  {
    key: 'de',
    label: 'Deutsch',
  },
  {
    key: 'en',
    label: 'English',
  },
]

const AppContextProvider = ({ children, data }) => {
  const [chapterIndex, setChapterIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(langs[0].key)

  const chaptersRaw = data?.chapters || []
  const assetFolder = data?.assetFolder || ''
  const chapters = translateChapters(chaptersRaw, currentLang, assetFolder)
  
  return (
    <AppContext.Provider
      value={{
        langs,
        currentLang,
        setCurrentLang,
        chapterIndex,
        setChapterIndex,
        chapters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider