import { useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';
import { Modal } from '../components/modal';

function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <Head>

        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'
          referrerPolicy='no-referrer'
        />
      </Head>
      <Modal/>

      <Component {...pageProps} />


      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js'
        strategy='afterInteractive'
      />
    </div>
  )
}

export default MyApp
