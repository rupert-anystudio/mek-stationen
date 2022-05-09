import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useAppContext from '../AppContext/useAppContext'
import Header from './Header'

const HeaderContainer = () => {
  const { headerIsHidden, headerIsCollapsed } = useAppContext()

  const animRefs = useRef({})
  const backgroundRef = useRef(null)
  const indexRefs = useRef([])
  const titleRefs = useRef([])

  useEffect(() => {
    animRefs.current.timeline = gsap
      .timeline({ paused: true, defaults: { duration: 1, ease: 'strong.inOut' } })
      .fromTo(titleRefs.current, { opacity: 1 }, { opacity: 0, duration: 0.15, stagger: 0 })
      .fromTo(backgroundRef.current, { y: 0 }, { y: -100, duration: 0.15 })
      .fromTo(indexRefs.current, { x: 0 }, { x: (index) => index * -110, duration: 0.5, ease: 'elastic.inOut(1, 0.75)' })

    return () => {
      animRefs.current.timeline.kill()
      animRefs.current.timeline = null
    }
  }, [])

  useEffect(() => {
    if (headerIsCollapsed) {
      animRefs.current.timeline.play()
    } else {
      animRefs.current.timeline.reverse()
    }
  }, [headerIsCollapsed])

  return (
    <Header
      isHidden={headerIsHidden}
      isCollapsed={headerIsCollapsed}
      indexRefs={indexRefs}
      titleRefs={titleRefs}
      backgroundRef={backgroundRef}
    />
  )
}

export default HeaderContainer