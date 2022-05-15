import { useState } from 'react'
import langs from '../../lib/languages'
import globalsRaw from '../../lib/globals'
import translateChapters from '../../lib/translateChapters'
import translateGlobals from '../../lib/translateGlobals'
import AppContext from './AppContext'
import useWindowScrollDirection from '../useWindowScrollDirection'

const AppContextProvider = ({ children, data }) => {
  const [chapterIndex, setChapterIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(langs[0].key)
  const [headerIsCollapsed, setHeaderIsCollapsed] = useState(false)
  const [headerIsHidden, setHeaderIsHidden] = useState(false)

  const chaptersRaw = data?.chapters || []
  const assetFolder = data?.assetFolder || ''
  const chapters = translateChapters(chaptersRaw, currentLang, assetFolder)
  const globals = translateGlobals(globalsRaw, currentLang)

  const scrollDir = useWindowScrollDirection()
  
  return (
    <AppContext.Provider
      value={{
        langs,
        chapters,
        globals,
        currentLang,
        setCurrentLang,
        chapterIndex,
        setChapterIndex,
        headerIsCollapsed,
        setHeaderIsCollapsed,
        headerIsHidden,
        setHeaderIsHidden,
        scrollDir,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider