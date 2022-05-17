import { useCallback, useState } from 'react'
import useAppContext from '../../../../../../AppContext/useAppContext'
import useResizeObserver from '../../../../../../useResizeObserver'
import Item from './Item'

const ItemContainer = props => {
  const { globals } = useAppContext()
  const [captionHeight, setCaptionHeight] = useState(0)

  const onResize = useCallback(({ height }) => {
    setCaptionHeight(height)
  }, [setCaptionHeight])

  const { ref } = useResizeObserver({ box: 'content-box', onResize })

  return (
    <Item
      {...props}
      captionRef={ref}
      captionHeight={captionHeight}
      captionToggleLabel={globals.captionToggle}
    />
  )
}

export default ItemContainer