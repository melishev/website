import 'styles/global.scss'

import Header from 'components/header'
import Back from 'components/back'
import ModalNavigation from 'components/modalNavigation'
import Footer from 'components/footer'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

function Application({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Back />
      <ModalNavigation />
      <Footer />
    </Provider>
  )
}

export default Application