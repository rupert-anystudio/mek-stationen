import { useCallback } from 'react'
import useAppContext from '../AppContext/useAppContext'

const HeaderHiddenToggle = () => {
  const { headerIsHidden, setHeaderIsHidden } = useAppContext()

  const handleChange = useCallback(e => {
    const value = e.target.checked
    setHeaderIsHidden(value)
  }, [setHeaderIsHidden])
  
  return (
    <div>
      <input type="checkbox" checked={headerIsHidden} id="headerIsHidden" onChange={handleChange} />
      <label htmlFor="headerIsHidden">{'headerIsHidden'}</label>
    </div>
  )
}

export default HeaderHiddenToggle