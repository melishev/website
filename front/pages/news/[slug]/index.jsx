import styles from './styles.module.scss';
import propTypes from 'prop-types';

import Layout from 'layouts/article';

import { fetchArticleData } from 'utils/fetchPageData';

import RenderText from 'utils/renderEditorJS';

import { DateTime } from 'luxon';
import { MaskImage } from 'components/utils';

function Article({ category, date, title, subTitle, media, article }) {
  return (
    <article className={styles.Article}>
      <small className={styles.Article_date}>{`${category.name} | ${DateTime.fromISO(date).setLocale('ru').toFormat('DD')}`}</small>
      <h1 className={styles.Article_title}>{title}</h1>
      <h5 className={styles.Article_subtitle}>{subTitle}</h5>
      <figure className={styles.Article_media}>
        <MaskImage mask="2x1" src={media.url} alt={media.alternativeText} />
        <figcaption><small>{media.alternativeText}</small></figcaption>
      </figure>
      {JSON.parse(article).blocks.map((block) => (
        RenderText(block)
      ))}
    </article>
  );
}

Article.propTypes = {
  category: propTypes.shape({
    name: propTypes.string,
  }).isRequired,
  date: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  media: propTypes.shape({
    alternativeText: propTypes.string,
    url: propTypes.string,
  }).isRequired,
  article: propTypes.string.isRequired,
};

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
