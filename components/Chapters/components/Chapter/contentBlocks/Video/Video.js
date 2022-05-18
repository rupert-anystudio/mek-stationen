import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Stop from '../../../../../../svgs/Stop'
import StaticStart from './components/StaticStart'
import VolumeControl from './components/VolumeControl'

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

const PlayerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background: none;
`

const Controls = styled.div`
  flex: 0 0 auto;
  position: relative;
  padding: 3rem 10rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 0;
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
    <StaticStart onClick={onPlayPause} image={`${src}.jpg`} />
    <Fixed style={{ display: isPlaying ? 'block' : 'none'}}>
      <FixedLayout>
        <Player>
          {isPlaying && (
            <ReactPlayer
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
              controls={false}
              volume={volume / 100}
            />
          )}
          <PlayerOverlay onClick={onPlayPause} />
        </Player>
        <Controls>
          <Stop onClick={onPlayPause} />
          <VolumeControl
            volume={volume}
            onVolumeDecrease={onVolumeDecrease}
            onVolumeIncrease={onVolumeIncrease}
          />
        </Controls>
      </FixedLayout>
    </Fixed>
  </Wrap>
)

export default Video