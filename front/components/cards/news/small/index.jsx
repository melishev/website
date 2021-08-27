import styles from './styles.module.scss'
import propTypes from 'prop-types'

import { MaskImage } from 'components/utils'
import { Small, Heading4, Text } from 'components/typography'

const CardNewsSmall = ({ media, category, title, date }) => {
  return (
    <div className={styles.CardNewsSmall}>
      <MaskImage mask="2x1" src={media.url} alt={media.alternativeText} />
      <div className={styles.CardNewsSmall_info}>
        <Small>{category}</Small>
        <Heading4>{title}</Heading4>
        <Text>{date}</Text>
      </div>
    </div>
  );
}

CardNewsSmall.propTypes = {
	category: propTypes.string,
  title: propTypes.string,
  date: propTypes.string,
}

CardNewsSmall.defaultProps = {
  category: 'Новость',
  title: 'Тестовый заголовок написанный специально для Melishev ™',
  date: '24 июня 2021'
}

export default CardNewsSmall
