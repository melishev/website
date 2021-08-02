import styles from './footer.module.scss'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link href="/">Melishev&#160;™</Link>
      <p>All rights reserved</p>
    </footer>
  )
}

export default Footer