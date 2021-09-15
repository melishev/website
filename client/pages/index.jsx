import styles from './styles.module.scss';
import propTypes from 'prop-types';

import Layout from 'layouts/page';

import { CardNews } from 'components';

import { fetchPageData } from 'utils/fetchPageData';
import axios from 'axios';

function News({ articles }) {
  return (
    <main className={styles.News}>
      <h1>Новости</h1>
      <div className={styles.News_cards}>
        {articles.map((article, i) => (
          <CardNews
            slug={article.slug}
            size={i === 0 ? 'large' : 'medium'}
            media={article.media}
            category={article.category}
            title={article.title}
            date={article.date}
            key={article.id}
          />
        ))}
      </div>
    </main>
  );
}

News.propTypes = {
  articles: propTypes.arrayOf(propTypes.object).isRequired,
};

News.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export async function getStaticProps() {
  const dataPage = await fetchPageData('news');
  const notFound = !dataPage;

  const dataArticle = await axios.get(`${process.env.api}/articles?_sort=date:DESC`);

  return {
    props: {
      ...dataPage,
      articles: [...dataArticle.data],
    },
    notFound,
  };
}

export default News;
