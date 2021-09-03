import styles from './styles.module.scss';
import propTypes from 'prop-types';

import { MaskImage } from 'components/utils';

import { DateTime } from 'luxon';

const CardNewsSmall = ({ media, category, title, date }) => {
  return (
    <div className={styles.CardNewsSmall}>
      <MaskImage mask="2x1" src={media.url} alt={media.alternativeText} />
      <div className={styles.CardNewsSmall_info}>
        <small>{category.name}</small>
        <h4>{title}</h4>
        <p>{DateTime.fromISO(date).setLocale('ru').toFormat('DD')}</p>
      </div>
    </div>
  );
};

CardNewsSmall.propTypes = {
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

CardNewsSmall.defaultProps = {
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

export default CardNewsSmall;
