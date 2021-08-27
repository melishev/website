import styles from './styles.module.scss'
import propTypes from 'prop-types'

import { MaskImage } from 'components/utils'
import { Small, Heading3, Text } from 'components/typography'

const CardNewsBig = ({ category, title, date }) => {
  return (
    <div className={styles.CardNewsBig}>
      <MaskImage className={styles.CardNewsBig_media} mask="2x1" />
      <div className={styles.CardNewsBig_info}>
        <Small>{category}</Small>
        <Heading3>{title}</Heading3>
        <Text>{date}</Text>
      </div>
    </div>
  );
}

CardNewsBig.propTypes = {
	category: propTypes.string,
  title: propTypes.string,
  date: propTypes.string,
}

CardNewsBig.defaultProps = {
  category: 'Новость',
  title: 'Тестовый заголовок написанный специально для Melishev ™',
  date: '24 июня 2021'
}

export default CardNewsBig
