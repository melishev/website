import styles from './footer.module.scss'

import Link from 'next/link'

import { Small } from 'components/typography'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link href="/">
        <a>
          <Small>Melishev&#160;™</Small>
        </a>
      </Link>
      <Small>All rights reserved</Small>
    </footer>
  )
}

export default Footer