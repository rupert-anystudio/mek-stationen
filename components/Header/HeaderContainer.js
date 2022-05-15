import { useCallback, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useAppContext from '../AppContext/useAppContext'
import Header from './Header'

const HeaderContainer = () => {
  const {
    currentLang,
    scrollDir,
    headerIsHidden,
    headerIsCollapsed,
    setHeaderIsCollapsed,
  } = useAppContext()

  const animRefs = useRef({})
  const labelRef = useRef(null)
  const backgroundRef = useRef(null)
  const backToStartRef = useRef(null)
  const indexRefs = useRef([])
  const titleRefs = useRef([])

  useEffect(() => {
    const timeline = gsap
      .timeline({ paused: true, defaults: { duration: 1, ease: 'strong.inOut' } })
      .fromTo(
        titleRefs.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.15, stagger: 0 }
      )
      .fromTo(
        backgroundRef.current,
        { y: 0 },
        { y: -100, duration: 0.15 },
        '-=0.1'
      )
      .fromTo(
        indexRefs.current,
        { x: 0 },
        { x: (index) => index * -110, duration: 0.5, ease: 'elastic.inOut(1, 0.75)' },
        '-=0.1'
      )
      .fromTo(
        backToStartRef.current,
        { x: 0, opacity: 1 },
        { x: '130%', opacity: 1, duration: 0.25 },
        '-=0.35'
      )
    animRefs.current.timeline = timeline
    return () => {
      timeline.kill()
    }
  }, [])

  useEffect(() => {
    if (scrollDir === 'DOWN') {
      setHeaderIsCollapsed(true)
    }
    if (scrollDir === 'UP') {
      setHeaderIsCollapsed(false)
    }
  }, [scrollDir, setHeaderIsCollapsed])

  useEffect(() => {
    if (headerIsCollapsed) {
      animRefs.current.timeline.play()
    } else {
      animRefs.current.timeline.reverse()
    }
  }, [headerIsCollapsed])

  const handleBackgroundClick = useCallback(() => {
    setHeaderIsCollapsed(prevVal => !prevVal)
  }, [setHeaderIsCollapsed])

  return (
    <Header
      isHidden={headerIsHidden}
      isCollapsed={headerIsCollapsed}
      indexRefs={indexRefs}
      titleRefs={titleRefs}
      labelRef={labelRef}
      backgroundRef={backgroundRef}
      backToStartRef={backToStartRef}
      onBackgroundClick={handleBackgroundClick}
    />
  )
}

export default HeaderContainer