import { useEffect, useState } from 'react'
import Images from './Images'

const ImagesContainer = ({ images: imagesRaw }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [shownCaption, setShownCaption] = useState(false)

  const images = imagesRaw.map((image, index) => ({
    ...image,
    key: `image-${index}`,
    showCaption: shownCaption,
    onCaptionShowClick: () => setShownCaption(true),
    onCaptionHideClick: () => setShownCaption(false),
  }))

  useEffect(() => {
    let timeout = setTimeout(() => setIsMounted(true), 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  console.log('isMounted', isMounted)

  return (
    <Images images={images} isMounted={isMounted} />
  )
}

export default ImagesContainer