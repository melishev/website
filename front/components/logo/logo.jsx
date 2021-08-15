import styles from './logo.module.scss'

import Link from 'next/link'

import { Lead } from 'components/typography'

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.Logo}>
        <Lead>Melishev&#160;™</Lead>
        {/* <span>&#160;&#160;|&#160;&#160;</span> */}
        {/* <h1>Augmented Reality</h1> */}
      </a>
    </Link>
  );
}

export default Logo
