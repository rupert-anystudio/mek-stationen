import { useState } from 'react'
import AppContext from './AppContext'

const langs = [
  {
    key: 'de',
    label: 'Deutsch',
  },
  {
    key: 'en',
    label: 'English',
  },
]

const AppContextProvider = ({ children, data }) => {
  const [currentLang, setCurrentLang] = useState(langs[0].key)
  return (
    <AppContext.Provider
      value={{
        langs,
        currentLang,
        setCurrentLang,
        ...data,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider