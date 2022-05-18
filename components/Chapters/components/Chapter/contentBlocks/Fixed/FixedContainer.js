import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Fixed from './Fixed'

gsap.registerPlugin(ScrollTrigger)

const FixedContainer = props => {
  const [showOverlay, setShowOverlay] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)

  const onImageClick = useCallback(() => {
    setShowOverlay(prevVal => !prevVal)
  }, [])

  const onToggle = useCallback((self) => {
    setIsActive(self.isActive)
  }, [])

  useEffect(() => {
    let trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onToggle,
    })
    triggerRef.current = trigger
    return () => {
      trigger.kill()
      triggerRef.current.kill()
      triggerRef.current = null
    }
  }, [onToggle])

  useEffect(() => {
    setShowOverlay(true)
  }, [isActive])

  return (
    <Fixed
      {...props}
      onImageClick={onImageClick}
      showOverlay={showOverlay}
      wrapperRef={wrapperRef}
      isActive={isActive}
    />
  )
}

export default FixedContainer