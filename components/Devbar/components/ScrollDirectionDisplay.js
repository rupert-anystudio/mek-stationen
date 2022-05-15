import { useAppContext } from '../../AppContext'

const ScrollDirectionDisplay = () => {
  const { scrollDir } = useAppContext()

  return (
    <div>
      <span>{`Is scrolling ${scrollDir}`}</span>
    </div>
  )
}

export default ScrollDirectionDisplay