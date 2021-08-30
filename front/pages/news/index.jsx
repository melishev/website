import styles from './news.module.scss';
import propTypes from 'prop-types';

import Layout from 'layouts/default';

import Link from 'next/link';

import { Heading1 } from 'components/typography';
import { CardNewsBig, CardNewsSmall } from 'components';

import { fetchPageData } from 'utils/fetchPageData';
import axios from 'axios';

import { useMediaQuery } from 'react-responsive';

function News({ articles }) {
  const isTablet = useMediaQuery(
    { maxDeviceWidth: 1024 },
    { deviceWidth: 1024 },
  );

  return (
    <main className={styles.News}>
      <Heading1>Новости</Heading1>
      <div className={styles.News_cards}>
        {articles.map((article, index) => (
          index % 5 === 0
            ? (
              <Link href={`/${article.slug}`} key={article.id}>
                <a style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                  {!isTablet
                    ? (
                      <CardNewsBig
                        media={article.media}
                        category={article.category}
                        title={article.title}
                        date={article.date}
                      />
                    )
                    : (
                      <CardNewsSmall
                        media={article.media}
                        category={article.category}
                        title={article.title}
                        date={article.date}
                      />
                    )}
                </a>
              </Link>
            )
            : (
              <Link href={`/${article.slug}`} key={article.id}>
                <a>
                  <CardNewsSmall
                    media={article.media}
                    category={article.category}
                    title={article.title}
                    date={article.date}
                  />
                </a>
              </Link>
            )
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

  const dataArticle = await axios.get(`${process.env.api}/articles`);

  return {
    props: {
      ...dataPage,
      articles: [...dataArticle.data],
    },
    notFound,
  };
}

export default News;
