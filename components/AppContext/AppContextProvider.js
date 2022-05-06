import { useState } from 'react'
import langs from '../../lib/languages'
import globalsRaw from '../../lib/globals'
import translateChapters from '../../lib/translateChapters'
import translateGlobals from '../../lib/translateGlobals'
import AppContext from './AppContext'

const AppContextProvider = ({ children, data }) => {
  const [chapterIndex, setChapterIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(langs[0].key)

  const chaptersRaw = data?.chapters || []
  const assetFolder = data?.assetFolder || ''
  const chapters = translateChapters(chaptersRaw, currentLang, assetFolder)
  const globals = translateGlobals(globalsRaw, currentLang)
  
  return (
    <AppContext.Provider
      value={{
        langs,
        currentLang,
        setCurrentLang,
        chapterIndex,
        setChapterIndex,
        chapters,
        globals,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider