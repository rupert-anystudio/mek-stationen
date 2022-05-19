import styled from 'styled-components'
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import Item from './Item'

import 'swiper/css'

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 70vh;
  margin: 0 0 17rem 0;
  background: white;
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 5.6rem;
    overflow: hidden;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: auto;
    position: relative;
  }
`

const Images = ({ images, isMounted }) => {
  return (
    <Wrap>
      {isMounted && (
        <ReactSwiper
          slidesPerView={'auto'}
          spaceBetween={56}
          centeredSlides
          preloadImages
          grabCursor
          initialSlide={0}
          loop
        >
          {images.map(image => (
            <SwiperSlide key={image.key}>
              {({ isActive }) => (
                <Item {...image} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </ReactSwiper>
      )}
    </Wrap>
  )
}

export default Images