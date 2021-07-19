import styles from 'styles/modules/header.module.scss'

import Link from 'next/link'

import { ReactSVG } from 'react-svg'

const Header = () => {
  return (
    <header className={styles.Header}>
      <p>Melishev</p>
      <ReactSVG src="public/svg/logo.svg" />
      <nav>
        <ul>
          <li><Link href="#">Projects</Link></li>
          <li><Link href="#">News</Link></li>
          <li><Link href="#">Products</Link></li>
          <li><Link href="#">Contacts</Link></li>
        </ul>
      </nav>
      <div>
        <button>􀉩</button>
      </div>
    </header>
  )
}

export default Header