import { useEffect, useState } from 'react'

const useWindowScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState('UP')

  useEffect(() => {
    const threshold = 300
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'DOWN' : 'UP')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    // console.log(scrollDir)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return scrollDir
}

export default useWindowScrollDirection