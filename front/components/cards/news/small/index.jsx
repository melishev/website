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
    url: 'https://images.unsplash.com/photo-1603911411636-e3ec8f3e8d23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3294&q=80',
  },
  category: {
    id: 1,
    name: 'Новость',
  },
  title: 'Тестовый заголовок написанный специально для Melishev ™',
  date: '24 июня 2021',
};

export default CardNewsSmall;
