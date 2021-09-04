import styles from './projects.module.scss';

import { fetchPageData } from 'utils/fetchPageData';

function Projects() {
  return (
    <main className={styles.Projects}>
      <h1>Hi!</h1>
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
