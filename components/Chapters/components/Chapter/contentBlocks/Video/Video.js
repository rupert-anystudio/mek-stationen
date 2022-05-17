import styled from 'styled-components'
import ReactPlayer from 'react-player'
// import dynamic from 'next/dynamic'
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Wrap = styled.div`
  padding: 0;
  margin: 0 0 20rem 0;
  position: relative;
  height: 100vh;
  width: 100%;
  background: black;
  z-index: 100;
`

const Stage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scale(0.7);
`

const Player = styled.div`
  position: relative;
  width: 100%;
  background: black;
  video {
    aspect-ratio: 16 / 9;
  }
`

const Controls = styled.div`
  position: relative;
  background: rgba(0,0,0,0.8);
  font-size: 5rem;
  line-height: 1;
  padding: 1rem 0;
  color: white;
`

const Video = ({
  src,
  playing,
  onPlayPause,
  onEnded,
  onPause,
  onVolumeChange,
  onToggleMuted,
  onStart,
  onStop,
  onProgress,
  onDuration,
  onSeekChange,
  isMounted,
}) => (
  <Wrap>
    <Stage>
      {isMounted && (
        <ReactPlayer
          // ref={playerRef}
          wrapper={Player}
          url={src}
          playing={playing}
          width="100%"
          height="100%"
          onEnded={onEnded}
          onPause={onPause}
          onStart={onStart}
          onVolumeChange={onVolumeChange}
          onToggleMuted={onToggleMuted}
          onStop={onStop}
          onProgress={onProgress}
          onDuration={onDuration}
          onSeekChange={onSeekChange}
        />
      )}
      <Controls>
        <span onClick={onPlayPause}>{playing ? 'Stop' : 'Play'}</span>
      </Controls>
    </Stage>
  </Wrap>
)

export default Video