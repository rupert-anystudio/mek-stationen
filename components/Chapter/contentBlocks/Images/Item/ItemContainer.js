import { useCallback, useRef, useState } from 'react'
import useResizeObserver from '../../../../useResizeObserver'
import Item from './Item'

const ItemContainer = props => {
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
    />
  )
}

export default ItemContainer