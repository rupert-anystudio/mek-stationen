import { useCallback } from 'react'
import useAppContext from '../../../AppContext/useAppContext'
import StationTitle from './StationTitle'

const StationTitleContainer = () => {
  const { titleParts = [], currentLang, onLangCyle } = useAppContext()

  const parts = titleParts.map((part, i) => {
    return {
      ...part,
      key: `part-${i}`,
      lang: currentLang,
    }
  })

  const handleTitleClick = useCallback(() => {
    onLangCyle()
  }, [onLangCyle])

  return (
    <StationTitle parts={parts} onTitleClick={handleTitleClick} />
  )
}

export default StationTitleContainer