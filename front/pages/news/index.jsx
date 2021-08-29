import styles from './news.module.scss';
import propTypes from 'prop-types';

import Link from 'next/link';

import { Heading1 } from 'components/typography';
import { CardNewsBig, CardNewsSmall } from 'components';

import { fetchPageData } from 'utils/fetchPageData';
import axios from 'axios';

function News({ articles }) {
  return (
    <main className={styles.News}>
      <section className={styles.News_section}>
        <Heading1>Новости</Heading1>
        <div className={styles.News_section_cards}>
          {articles.map((article, index) => (
            index % 5 === 0
              ? (
                <Link href={`/${article.slug}`} key={article.id}>
                  <a style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                    <CardNewsBig
                      media={article.media}
                      category={article.category.name}
                      title={article.title}
                      date={article.date}
                    />
                  </a>
                </Link>
              )
              : (
                <Link href={`/${article.slug}`} key={article.id}>
                  <a>
                    <CardNewsSmall
                      media={article.media}
                      category={article.category.name}
                      title={article.title}
                      date={article.date}
                    />
                  </a>
                </Link>
              )
          ))}
        </div>
      </section>
    </main>
  );
}

News.propTypes = {
  articles: propTypes.arrayOf(propTypes.object).isRequired,
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
