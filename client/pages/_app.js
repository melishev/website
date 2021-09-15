/* eslint-disable react/prop-types */

import 'scss/global.scss';

// Import Swiper styles
import 'swiper/swiper.scss';

// // Import Seo
// import { DefaultSeo } from 'next-seo';
// import Seo from '../next-seo.config';

// Import Redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function Application({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {/* <DefaultSeo
        title={pageProps.statusCode ? pageProps.statusCode : pageProps.meta.title}
        description={pageProps.statusCode ? pageProps.statusCode : pageProps.meta.description}
        canonical={pageProps.statusCode ? '' : `https://${process.env.domain}/${pageProps.meta.canonical}`}
        {...Seo}
      /> */}
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default Application;
