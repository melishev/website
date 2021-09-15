// Import components
import { Header, Vidget, Modal, Footer } from 'components';
import { Back } from 'components/utils';

// Import Seo
import { DefaultSeo } from 'next-seo';
import Seo from '../next-seo.config';

function layoutDefault({ children, pageProps }) {
  return (
    <>
      <DefaultSeo
        title={pageProps.statusCode ? pageProps.statusCode : pageProps.meta.title}
        description={pageProps.statusCode ? pageProps.statusCode : pageProps.meta.description}
        canonical={pageProps.statusCode ? '' : `https://${process.env.domain}/${pageProps.meta.canonical}`}
        {...Seo}
      />
      <Header />
      <aside>
        <Vidget />
      </aside>
      {children}
      <Back />
      <Modal />
      <Footer />
    </>
  );
}

export default layoutDefault;
