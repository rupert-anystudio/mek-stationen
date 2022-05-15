import { useState } from 'react'
import langs, { langKeys } from '../../lib/languages'
import globalsRaw from '../../lib/globals'
import translateChapters from '../../lib/translateChapters'
import translateGlobals from '../../lib/translateGlobals'
import translateTitleParts from '../../lib/translateTitleParts'
import AppContext from './AppContext'
import useWindowScrollDirection from '../useWindowScrollDirection'

const AppContextProvider = ({ children, data }) => {
  const [chapterIndex, setChapterIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(langs[0].key)
  const [headerIsCollapsed, setHeaderIsCollapsed] = useState(false)
  const [headerIsHidden, setHeaderIsHidden] = useState(false)

  // const titlePartsRaw = data?.titleParts || []
  // const chaptersRaw = data?.chapters || []
  const assetFolder = data?.assetFolder || ''
  const titleParts = translateTitleParts((data?.titleParts || []), currentLang)
  const chapters = translateChapters((data?.chapters || []), currentLang, assetFolder)
  const globals = translateGlobals(globalsRaw, currentLang)

  const scrollDir = useWindowScrollDirection()

  const onLangCicle = () => {
    const index = langKeys.indexOf(currentLang)
    console.log('onLangCicle',index)
  }

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
        titleParts,
        onLangCicle,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider