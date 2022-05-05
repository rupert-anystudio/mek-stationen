import { useState } from 'react'
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
  return (
    <AppContext.Provider
      value={{
        langs,
        currentLang,
        setCurrentLang,
        chapterIndex,
        setChapterIndex,
        ...data,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider