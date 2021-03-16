import '@styles/globals.css'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Welcome to my app!" />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default Application
