import styles from './styles.module.scss';
import propTypes from 'prop-types';

import { MaskImage } from 'components/utils';
import { Small, Heading4, Text } from 'components/typography';

import { DateTime } from 'luxon';

const CardNewsSmall = ({ media, category, title, date }) => {
  return (
    <div className={styles.CardNewsSmall}>
      <MaskImage mask="2x1" src={media.url} alt={media.alternativeText} />
      <div className={styles.CardNewsSmall_info}>
        <Small>{category.name}</Small>
        <Heading4>{title}</Heading4>
        <Text>{DateTime.fromISO(date).setLocale('ru').toFormat('DD')}</Text>
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
