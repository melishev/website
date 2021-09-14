import styles from './styles.module.scss';
import propTypes from 'prop-types';

import { MaskImage } from 'components/utils';

import { DateTime } from 'luxon';

import Link from 'next/link';
import { useRouter } from 'next/router';

const CardNews = ({ slug, size, media, category, title, date }) => {
  return (
    <Link href={`${useRouter().pathname}/${slug}`}>
      <a data-size={size}>
        <div className={styles.CardNews} data-size={size}>
          <MaskImage className={styles.media} mask="2x1" src={media.url} alt={media.alternativeText} />
          <div className={styles.info}>
            <small>{category.name}</small>
            {size === 'large'
              ? <h3>{title}</h3>
              : <h4>{title}</h4>}
            <p>{DateTime.fromISO(date).setLocale('ru').toFormat('DD')}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

CardNews.propTypes = {
  slug: propTypes.string.isRequired,
  size: propTypes.string,
  media: propTypes.shape({
    id: propTypes.number,
    url: propTypes.string,
    alternativeText: propTypes.string,
  }),
  category: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  }),
  title: propTypes.string,
  date: propTypes.string,
};

CardNews.defaultProps = {
  size: 'medium',
  media: {
    url: '/default/image.jpg',
  },
  category: {
    id: 1,
    name: 'Новость',
  },
  title: 'Тестовый заголовок написанный специально для Melishev ™',
  date: '24 июня 2021',
};

export default CardNews;
