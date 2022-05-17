import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useScrollTriggerAnimations = () => {
  const animRefs = useRef({})

  useEffect(() => {
    let appearingParagraphs = gsap.utils.toArray('.appearingText')
    appearingParagraphs.forEach((paragraph, i) => {
      const key = `appearingText${i}`
      animRefs.current[key] = gsap.fromTo(
        paragraph,
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: paragraph.parentNode,
            markers: false,
            scrub: false,
            start: 'top bottom',
            end: '+=250',
            toggleActions: 'none resume none reset',
          }
        }
      )
    })
    return () => {
      Object.values(animRefs.current).forEach(anim => anim.kill())
      animRefs.current = {}
      appearingParagraphs = []
    }
  }, [])

  useEffect(() => {
    console.log('useScrollTriggerAnimations')
  }, [])
}

export default useScrollTriggerAnimations