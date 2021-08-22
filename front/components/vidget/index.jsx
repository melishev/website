import styles from './styles.module.scss'

import { ReactSVG } from 'react-svg'

import { Small, Text } from 'components/typography'

const Vidget = () => {
  return (
    <div className={styles.Vidget}>
      <ReactSVG className={styles.Vidget_icon} src="/svg/boomBox.svg"/>
      <div className={styles.Vidget_info}>
        <Text>DOROGO (feat. blago white)</Text>
        <Small>Егор Крид, blago white</Small>
      </div>
    </div>
  );
}

export default Vidget
