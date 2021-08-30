// Import components
import { Header, Vidget, Modal, Footer } from 'components';
import { Back } from 'components/utils';

function layoutDefault({ children }) {
  return (
    <>
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
