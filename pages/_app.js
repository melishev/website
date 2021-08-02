import 'scss/global.scss'

import { Header, Back, ModalNavigation, Footer } from 'components'

import { DefaultSeo } from 'next-seo'
import Seo from '../next-seo.config'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

function Application({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultSeo 
        title={pageProps.statusCode ? pageProps.statusCode : pageProps.meta.title}
        titleTemplate='%s | Melishev'
        description={pageProps.statusCode ? pageProps.statusCode : pageProps.meta.description}
        canonical={pageProps.statusCode ? '' : `https://${process.env.domain}/${pageProps.meta.canonical}`}
        {...Seo}
      />
      <Header />
      <Component {...pageProps} />
      <Back />
      <ModalNavigation />
      <Footer />
    </Provider>
  )
}

export default Application