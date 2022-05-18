import styled from 'styled-components'
import ReactPlayer from 'react-player'
// import dynamic from 'next/dynamic'
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
import StaticStart from './components/StaticStart'

const Wrap = styled.div`
  padding: 0;
  margin: 0 0 20rem 0;
  position: relative;
  height: 100vh;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Stage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scale(0.7);
`

const Fixed = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 9000;
  overflow: hidden;
`

const FixedLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`

const Player = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  background: black;
  overflow: hidden;
`

const Controls = styled.div`
  flex: 0 0 auto;
  position: relative;
  font-size: 4rem;
  line-height: 1;
  padding: 2rem 25rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const Video = ({
  src,
  isPlaying,
  onPlayPause,
  onEnded,
  onPause,
  onVolumeChange,
  onStart,
  onProgress,
  onDuration,
  volume,
  onVolumeIncrease,
  onVolumeDecrease,
}) => (
  <Wrap>
    <StaticStart onClick={onPlayPause} />
    <Fixed style={{ display: isPlaying ? 'block' : 'none'}}>
      <FixedLayout>
        <Player>
          {isPlaying && (
            <ReactPlayer
              // ref={playerRef}
              url={src}
              playing={isPlaying}
              width="100%"
              height="100%"
              onEnded={onEnded}
              onPause={onPause}
              onStart={onStart}
              onVolumeChange={onVolumeChange}
              onProgress={onProgress}
              onDuration={onDuration}
              controls
              volume={volume / 100}
            />
          )}
        </Player>
        <Controls>
          <span onClick={onPlayPause}>Stop</span>
          <div>
            <span>{`Vol: ${volume}`}</span>
            <span onClick={onVolumeDecrease}>{`-`}</span>
            <span onClick={onVolumeIncrease}>{`+`}</span>
          </div>
        </Controls>
      </FixedLayout>
    </Fixed>
  </Wrap>
)

export default Video