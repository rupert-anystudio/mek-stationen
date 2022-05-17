import { useCallback, useEffect, useState } from 'react'
import Video from './Video'

const VideoContainer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

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
    // this.setState({ playing: this.state.loop })
  }, [])
  
  const handleEnded = useCallback(() => {
    console.log('onEnded')
    // this.setState({ playing: this.state.loop })
  }, [])

  const handlePause = useCallback(() => {
    console.log('onPause')
    // this.setState({ playing: false })
  }, [])

  const handleVolumeChange = useCallback((e) => {
    console.log('onVolumeChange')
    // this.setState({ volume: parseFloat(e.target.value) })
  }, [])

  const handleToggleMuted = useCallback(() => {
    console.log('onToggleMuted')
    // this.setState({ muted: !this.state.muted })
  }, [])

  const handleStop = useCallback(() => {
    console.log('onStop')
    // this.setState({ url: null, playing: false })
  }, [])

  const handleSeekChange = useCallback(e => {
    const seekVal = parseFloat(e.target.value)
    console.log('isMounted', seekVal)
    // this.setState({ played: parseFloat(e.target.value) })
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [setIsMounted])

  return (
    <Video
      src={src}
      playing={isPlaying}
      onPlayPause={handlePlayPause}
      onEnded={handleEnded}
      onPause={handlePause}
      onVolumeChange={handleVolumeChange}
      onToggleMuted={handleToggleMuted}
      onStop={handleStop}
      onProgress={handleProgress}
      onStart={handleStart}
      onDuration={handleDuration}
      onSeekChange={handleSeekChange}
      isMounted={isMounted}
    />
  )
}

export default VideoContainer