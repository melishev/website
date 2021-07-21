import 'styles/global.scss'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

import { DefaultSeo } from 'next-seo'

import { Header, Back, ModalNavigation, Footer } from 'components'

function Application({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultSeo
        title='Home'
        titleTemplate='%s | Melishev'
        description='Melishev ™ is a space where works, news and products created by creative and talented people are demonstrated.'
        canonical='https://melishev.ru/'
        openGraph={{
          type: 'website',
          url: 'https://melishev.ru',
          site_name: 'Melishev ™',
          title: 'Main | Melishev',
          description: 'Melishev ™ is a space where works, news and products created by creative and talented people are demonstrated.',
          images: [
            {
              url: 'https://melishev.ru/image/ogImage.jpg',
              width: 1200,
              height: 630,
              alt: 'Community',
            },
          ],
        }}
        twitter={{
          site: '@melishev',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://melishev.ru/favicon.svg',
          },
          {
            rel: 'mask-icon',
            href: 'https://melishev.ru/favicon.svg',
            color: 'black',
          },
        ]}
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