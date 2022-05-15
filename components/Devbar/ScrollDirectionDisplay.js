import useAppContext from '../AppContext/useAppContext'

const ScrollDirectionDisplay = () => {
  const { scrollDir } = useAppContext()

  return (
    <div>
      <span>{`Is scrolling ${scrollDir}`}</span>
    </div>
  )
}

export default ScrollDirectionDisplay