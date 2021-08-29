import styles from './contacts.module.scss';

import { Plug } from 'components';

import { fetchPageData } from 'utils/fetchPageData';

function Contacts() {
  return (
    <main className={styles.Contacts}>
      <Plug />
    </main>
  );
}

export async function getStaticProps() {
  const dataPage = await fetchPageData('contacts');

  const notFound = !dataPage;

  return {
    props: {
      ...dataPage,
    },
    notFound,
  };
}

export default Contacts;
