import { useCallback, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useAppContext from '../AppContext/useAppContext'
import Chapter from './Chapter'

gsap.registerPlugin(ScrollTrigger)

const ChapterContainer = ({ index, titleParts, content, id }) => {
  const { setChapterIndex } = useAppContext()

  const wrapRef = useRef(null)
  const gsapRef = useRef({})

  const handleComponentEnter = useCallback(() => {
    setChapterIndex(index)
  }, [index, setChapterIndex])

  useEffect(() => {
    gsapRef.current.trigger = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      onEnter: handleComponentEnter,
      onEnterBack: handleComponentEnter,
    })
    return () => {
      Object.values(gsapRef.current).forEach(anim => anim.kill())
      gsapRef.current = {}
    }
  }, [handleComponentEnter])

  return (
    <Chapter
      titleParts={titleParts}
      content={content}
      wrapRef={wrapRef}
      id={id}
    />
  )
}

export default ChapterContainer