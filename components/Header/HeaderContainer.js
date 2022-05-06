import useAppContext from '../AppContext/useAppContext'
import Header from './Header'

const HeaderContainer = () => {
  const { headerIsHidden, headerIsCollapsed } = useAppContext()
  return (
    <Header
      isHidden={headerIsHidden}
      isCollapsed={headerIsCollapsed}
    />
  )
}

export default HeaderContainer