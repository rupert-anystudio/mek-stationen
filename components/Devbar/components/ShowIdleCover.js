import { useCallback } from 'react'
import { useAppContext } from '../../AppContext'

const ShowIdleCoverToggle = () => {
  const { showIdleCover, setShowIdleCover } = useAppContext()

  const handleChange = useCallback(e => {
    const value = e.target.checked
    setShowIdleCover(value)
  }, [setShowIdleCover])
  
  return (
    <div>
      <input type="checkbox" checked={showIdleCover} id="showIdleCover" onChange={handleChange} />
      <label htmlFor="showIdleCover">{'showIdleCover'}</label>
    </div>
  )
}

export default ShowIdleCoverToggle