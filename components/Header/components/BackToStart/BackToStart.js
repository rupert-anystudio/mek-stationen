import { forwardRef } from 'react'
import useAppContext from '../../../AppContext/useAppContext'
import PillButton from '../../../PillButton'

const BackToStart = ({
  className,
  style,
}, ref) => {
  const { globals } = useAppContext()
  return (
    <PillButton
      ref={ref}
      label={globals.backToStart}
      className={className}
      style={style}
    />
  )
}

export default forwardRef(BackToStart)