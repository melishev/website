import styles from './styles.module.scss';
import Layout from 'layouts/default';

import { fetchArticleData } from 'utils/fetchPageData';

import RenderText from 'utils/renderEditorJS';

function Article({ article }) {
  return (
    <article className={styles.Article}>
      {JSON.parse(article).blocks.map((block) => (
        RenderText(block)
      ))}
    </article>
  );
}

Article.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const dataPage = await fetchArticleData(slug);
  const notFound = !dataPage;

  return {
    props: {
      ...dataPage,
    },
    notFound,
  };
}

export default Article;
