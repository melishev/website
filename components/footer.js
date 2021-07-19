import styles from 'styles/components/footer.module.scss'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link href="/">Melishev</Link>
      <p>All rights reserved</p>
    </footer>
  )
}

export default Footer