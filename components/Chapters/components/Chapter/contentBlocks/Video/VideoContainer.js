import { useCallback, useEffect, useState } from 'react'
import useAppContext from '../../../../../AppContext/useAppContext'
import Video from './Video'

const VideoContainer = ({ src }) => {
  const { volume, onVolumeDecrease, onVolumeIncrease } = useAppContext()
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleOpen = useCallback(() => {
    console.log('onOpen')
    setIsOpen(true)
  }, [setIsOpen])

  const handlePlayPause = useCallback(() => {
    console.log('onPlayPause')
    setIsPlaying(prevVal => !prevVal)
  }, [setIsPlaying])

  const handleProgress = useCallback(state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    // if (!this.state.seeking) {
    //   this.setState(state)
    // }
  }, [])

  const handleDuration = useCallback(state => {
    console.log('onDuration', state)
    // We only want to update time slider if we are not currently seeking
    // if (!this.state.seeking) {
    //   this.setState(state)
    // }
  }, [])

  const handleStart = useCallback(() => {
    console.log('onStart')
    setIsPlaying(true)
  }, [setIsPlaying])

  const handleEnded = useCallback(() => {
    console.log('onEnded')
    setIsPlaying(false)
  }, [])

  const handlePause = useCallback(() => {
    console.log('onPause')
    // setIsPlaying(false)
  }, [])

  const handleVolumeChange = useCallback((e) => {
    console.log('onVolumeChange')
    // this.setState({ volume: parseFloat(e.target.value) })
  }, [])

  return (
    <Video
      src={src}
      isPlaying={isPlaying}
      onPlayPause={handlePlayPause}
      onEnded={handleEnded}
      onPause={handlePause}
      onVolumeChange={handleVolumeChange}
      onProgress={handleProgress}
      onStart={handleStart}
      onDuration={handleDuration}
      onVolumeDecrease={onVolumeDecrease}
      onVolumeIncrease={onVolumeIncrease}
      volume={volume}
    />
  )
}

export default VideoContainer