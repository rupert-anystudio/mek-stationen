import { useState } from 'react'
import Images from './Images'

const ImagesContainer = ({ images: imagesRaw }) => {
  const [shownCaption, setShownCaption] = useState(null)

  const images = imagesRaw.map((image, index) => ({
    ...image,
    key: index,
    showCaption: index === shownCaption,
    onCaptionShowClick: () => setShownCaption(prevIndex => prevIndex === index ? null : index),
    onCaptionHideClick: () => setShownCaption(null),
  }))

  return (
    <Images images={images} />
  )
}

export default ImagesContainer