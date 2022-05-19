import { forwardRef, useCallback } from 'react'
import useAppContext from '../AppContext/useAppContext'
import CircleButton from '../CircleButton/CircleButton'
import PillButton from '../PillButton'

const BackToStart = ({
  className,
  style,
  isCircle
}, ref) => {
  const { globals } = useAppContext()
  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  if (isCircle) {
    return (
      <CircleButton
        ref={ref}
        label={globals.backToStartCircle}
        className={className}
        style={style}
        onClick={handleClick}
      />
    )
  }
  return (
    <PillButton
      ref={ref}
      label={globals.backToStart}
      className={className}
      style={style}
      onClick={handleClick}
    />
  )
}

export default forwardRef(BackToStart)