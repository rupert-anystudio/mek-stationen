import { useCallback } from 'react'
import useAppContext from '../AppContext/useAppContext'

const HeaderCollapsedToggle = () => {
  const { headerIsCollapsed, setHeaderIsCollapsed } = useAppContext()

  const handleChange = useCallback(e => {
    const value = e.target.checked
    setHeaderIsCollapsed(value)
  }, [setHeaderIsCollapsed])
  
  return (
    <div>
      <input type="checkbox" checked={headerIsCollapsed} id="headerIsCollapsed" onChange={handleChange} />
      <label htmlFor="headerIsCollapsed">{'headerIsCollapsed'}</label>
    </div>
  )
}

export default HeaderCollapsedToggle