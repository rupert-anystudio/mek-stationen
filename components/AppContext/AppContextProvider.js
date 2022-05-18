import { useCallback, useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { useRouter } from 'next/router'
import langs, { langKeys } from '../../lib/languages'
import globalsRaw from '../../lib/globals'
import translateChapters from '../../lib/translateChapters'
import translateGlobals from '../../lib/translateGlobals'
import translateTitleParts from '../../lib/translateTitleParts'
import AppContext from './AppContext'
import useWindowScrollDirection from '../useWindowScrollDirection'

const volumeMax = 100
const volumeIncrement = 10
const idleSeconds = 60 * 5 // 5 Mins

const AppContextProvider = ({ children, data }) => {
  const [chapterIndex, setChapterIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(langs[0].key)
  const [headerIsCollapsed, setHeaderIsCollapsed] = useState(true)
  const [headerIsHidden, setHeaderIsHidden] = useState(false)
  const [showIdleCover, setShowIdleCover] = useState(true)
  const [volume, setVolume] = useState(volumeMax)

  const onIdle = useCallback(() => {
    // console.log('onIdle')
    setShowIdleCover(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useIdleTimer({
    timeout: 1000 * idleSeconds,
    startOnMount: true,
    onIdle,
  })

  const scrollDir = useWindowScrollDirection()

  useEffect(() => {
    if (showIdleCover) {
      setHeaderIsCollapsed(false)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    setHeaderIsCollapsed(true)
    window.scrollTo({ top: 190, left: 0, behavior: 'smooth' })
  }, [showIdleCover])

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

  const assetFolder = data?.assetFolder || ''
  const titleParts = translateTitleParts((data?.titleParts || []), currentLang)
  const chapters = translateChapters((data?.chapters || []), currentLang, assetFolder)
  const globals = translateGlobals(globalsRaw, currentLang)

  const onLangCycle = useCallback(() => {
    const index = langKeys.indexOf(currentLang)
    const nextIndex = index + 1 >= langKeys.length ? 0 : index + 1
    const nextLang = langKeys[nextIndex]
    setCurrentLang(nextLang)
  }, [setCurrentLang, currentLang])

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
        showIdleCover,
        setShowIdleCover,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider