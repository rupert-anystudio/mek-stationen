import { useCallback, useState } from 'react'
import langs, { langKeys } from '../../lib/languages'
import globalsRaw from '../../lib/globals'
import translateChapters from '../../lib/translateChapters'
import translateGlobals from '../../lib/translateGlobals'
import translateTitleParts from '../../lib/translateTitleParts'
import AppContext from './AppContext'
import useWindowScrollDirection from '../useWindowScrollDirection'

const volumeMax = 100
const volumeIncrement = 10

const AppContextProvider = ({ children, data }) => {
  const [chapterIndex, setChapterIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(langs[0].key)
  const [headerIsCollapsed, setHeaderIsCollapsed] = useState(true)
  const [headerIsHidden, setHeaderIsHidden] = useState(false)
  const [volume, setVolume] = useState(volumeMax)

  const onVolumeDecrease = useCallback(() => {
    setVolume(vol => {
      const newVol = vol - volumeIncrement
      if (newVol < 0) return 0
      return newVol
    })
  }, [setVolume])

  const onVolumeIncrease = useCallback(() => {
    setVolume(vol => {
      const newVol = vol + volumeIncrement
      if (newVol >= volumeMax) return volumeMax
      return newVol
    })
  }, [setVolume])

  // const titlePartsRaw = data?.titleParts || []
  // const chaptersRaw = data?.chapters || []
  const assetFolder = data?.assetFolder || ''
  const titleParts = translateTitleParts((data?.titleParts || []), currentLang)
  const chapters = translateChapters((data?.chapters || []), currentLang, assetFolder)
  const globals = translateGlobals(globalsRaw, currentLang)

  const scrollDir = useWindowScrollDirection()

  const onLangCycle = () => {
    const index = langKeys.indexOf(currentLang)
    const nextIndex = index + 1 >= langKeys.length ? 0 : index + 1
    console.log('onLangCycle',index, nextIndex)
    const nextLang = langKeys[nextIndex]
    setCurrentLang(nextLang)
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
        onLangCycle,
        volume,
        onVolumeDecrease,
        onVolumeIncrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider