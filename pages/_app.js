import 'styles/global.scss'

import Header from 'components/header'
import Footer from 'components/footer'
import ModalNavigation from 'components/modalNavigation'

function Application({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ModalNavigation />
      <Footer />
    </>
  )
}

export default Application