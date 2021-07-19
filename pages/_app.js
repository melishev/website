import 'styles/global.scss'

import Header from 'components/header'
import Footer from 'components/footer'

function Application({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default Application