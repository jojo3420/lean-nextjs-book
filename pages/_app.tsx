import App, { AppContext, AppProps, AppInitialProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle'
import 'bulma/css/bulma.min.css'

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>할일 관리</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )

}

export default app