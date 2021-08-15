import styles from './logo.module.scss'

import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.Logo}>
        <p>Melishev&#160;™</p>
        {/* <span>&#160;&#160;|&#160;&#160;</span> */}
        {/* <h1>Augmented Reality</h1> */}
      </a>
    </Link>
  );
}

export default Logo
