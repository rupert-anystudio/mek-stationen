import styled from 'styled-components'
import { useAppContext } from '../AppContext'
import CircleButton from '../CircleButton/CircleButton'
import SkewedTitle from '../SkewedTitle'

const Wrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  z-index: 9999;
  cursor: pointer;
`

const StartButton = styled(CircleButton)`
  position: absolute;
  bottom: 10rem;
  right: 10rem;
`

const IdleCover = () => {
  const { showIdleCover, setShowIdleCover, globals, titleParts } = useAppContext()

  const onStartClick = e => {
    e.preventDefault()
    setShowIdleCover(false)
  }

  if (!showIdleCover) return null

  return (
    <Wrap onClick={onStartClick}>
      <SkewedTitle parts={titleParts} />
      <StartButton label={globals.idleCoverButton} />
    </Wrap>
  )
}

export default IdleCover