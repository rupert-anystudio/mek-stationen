import Head from 'next/head'
import 'normalize.css'
import '../styles/fontfaces.css'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const title = 'MEK Station'
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
