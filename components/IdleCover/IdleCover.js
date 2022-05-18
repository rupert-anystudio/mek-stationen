import styled from 'styled-components'
import { useAppContext } from '../AppContext'
import CircleButton from '../CircleButton/CircleButton'

const Wrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
`

const StartButton = styled(CircleButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const IdleCover = () => {
  const { showIdleCover, setShowIdleCover, globals } = useAppContext()

  const onStartClick = e => {
    e.preventDefault()
    setShowIdleCover(false)
  }

  if (!showIdleCover) return null

  return (
    <Wrap>
      <StartButton label={globals.idleCoverButton} onClick={onStartClick} />
    </Wrap>
  )
}

export default IdleCover