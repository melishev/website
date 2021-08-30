import styles from './styles.module.scss';
import propTypes from 'prop-types';

import { MaskImage } from 'components/utils';
import { Small, Heading3, Text } from 'components/typography';

import { DateTime } from 'luxon';

const CardNewsBig = ({ media, category, title, date }) => {
  return (
    <div className={styles.CardNewsBig}>
      <MaskImage className={styles.CardNewsBig_media} mask="2x1" src={media.url} alt={media.alternativeText} />
      <div className={styles.CardNewsBig_info}>
        <Small>{category.name}</Small>
        <Heading3>{title}</Heading3>
        <Text>{DateTime.fromISO(date).setLocale('ru').toFormat('DD')}</Text>
      </div>
    </div>
  );
};

CardNewsBig.propTypes = {
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

CardNewsBig.defaultProps = {
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

export default CardNewsBig;
