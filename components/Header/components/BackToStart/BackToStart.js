import { forwardRef, useCallback } from 'react'
import useAppContext from '../../../AppContext/useAppContext'
import PillButton from '../../../PillButton'

const BackToStart = ({
  className,
  style,
}, ref) => {
  const { globals } = useAppContext()
  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <PillButton
      ref={ref}
      label={globals.backToStart}
      className={className}
      style={style}
      onClick={handleClick}
      href=''
    />
  )
}

export default forwardRef(BackToStart)