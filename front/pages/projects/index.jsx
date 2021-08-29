import styles from './projects.module.scss';

import { Plug } from 'components';

import { fetchPageData } from 'utils/fetchPageData';

function Projects() {
  return (
    <main className={styles.Projects}>
      <Plug />
    </main>
  );
}

export async function getStaticProps() {
  const dataPage = await fetchPageData('projects');

  const notFound = !dataPage;

  return {
    props: {
      ...dataPage,
    },
    notFound,
  };
}

export default Projects;
