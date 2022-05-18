import Head from 'next/head'
import 'normalize.css'
import '../styles/fontfaces.css'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import Chapters from '../components/Chapters'
import AppContextProvider from '../components/AppContext/AppContextProvider'
import Devbar from '../components/Devbar'
import IdleCover from '../components/IdleCover'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PillButton from '../components/PillButton'
import styled from 'styled-components'

const stationRoutes = ['/peacock', '/lebendebruecken', '/spanflechten']

const Layout = ({ children, withDevbar }) => {
  return (
    <>
      <Head>
        <title>{'MEK'}</title>
      </Head>
      <GlobalStyles />
      <Main>
        {children}
      </Main>
      {withDevbar && (
        <Devbar />
      )}
    </>
  )
}

const StationApp = ({ data }) => {
  return (
    <AppContextProvider data={data}>
      <Layout withDevbar>
        <Header />
        <Chapters />
        <IdleCover />
      </Layout>
    </AppContextProvider>
  )
}

const InvalidRoute = ({ }) => {
  return (
    <>
      Invalid Route
    </>
  )
}

const Root = styled.div`
  background: black;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Stations = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  > * {
    margin: 1rem 0;
    text-transform: uppercase;
  }
`

const RootRoute = ({ pageProps = {} }) => {
  const {
    pages = {}
  } = pageProps
  const [station, setStation] = useState(null)
  if (!station) return (
    <Layout>
      <Root>
        <Stations>
          {Object.keys(pages).map((key, i) => {
            return <PillButton key={key} onClick={() => setStation(key)} label={`${i + 1}: ${key}`} />
          })}
        </Stations>
      </Root>
    </Layout>
  )
  return (
    <StationApp data={pages[station]} />
  )
}

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isRoot = pathname === '/'
  const isStation = stationRoutes.includes(pathname)
  const isInvalid = !isStation && !isRoot
  if (isInvalid) return <InvalidRoute />
  if (isRoot) return <RootRoute pageProps={pageProps} />
  return <StationApp data={pageProps} />
}

export default MyApp
