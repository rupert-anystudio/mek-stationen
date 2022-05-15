import Head from 'next/head'
import 'normalize.css'
import '../styles/fontfaces.css'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Chapters from '../components/Chapters'
import AppContextProvider from '../components/AppContext/AppContextProvider'
import Devbar from '../components/Devbar'

function MyApp({ Component, pageProps }) {
  const {
    chapters = [],
    title = 'MEK Station',
    assetFolder,
    titleParts = [],
  } = pageProps
  return (
    <AppContextProvider data={{ chapters, assetFolder, titleParts }}>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
      </Head>
      <Devbar />
      <Header />
      <Main>
        <Chapters />
        <Component {...pageProps} />
      </Main>
      <Footer />
    </AppContextProvider>
  )
}

export default MyApp
