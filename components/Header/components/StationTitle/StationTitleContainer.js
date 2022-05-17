import { useCallback } from 'react'
import { gsap } from 'gsap'
import useAppContext from '../../../AppContext/useAppContext'
import StationTitle from './StationTitle'

const StationTitleContainer = () => {
  const { titleParts = [], currentLang, onLangCycle } = useAppContext()

  const parts = titleParts.map((part, i) => {
    
    const x = gsap.utils.interpolate(
      titleParts.length * -0,
      titleParts.length * 0,
      (i / (titleParts.length - 1))
    )
    
    const y = gsap.utils.interpolate(
      titleParts.length * -60,
      titleParts.length * 60,
      (i / (titleParts.length - 1))
    )

    return {
      ...part,
      key: `${currentLang}-${i}`,
      x,
      y,
    }
  })

  const handleTitleClick = useCallback(() => {
    onLangCycle()
  }, [onLangCycle])

  return (
    <StationTitle parts={parts} onTitleClick={handleTitleClick} />
  )
}

export default StationTitleContainer