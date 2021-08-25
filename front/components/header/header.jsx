import styles from './header.module.scss'

import Link from 'next/link'

import LogoSVG from 'public/svg/logo.svg'

import { Small, Lead } from 'components/typography'

import { useDispatch, useSelector } from 'react-redux'
import { openNavigation } from 'redux/state/modals'
import { selectDataNavigation } from 'redux/state/global'

import { ReactSVG } from 'react-svg'


const Header = () => {

  const dispatch = useDispatch()

  const dataNavigation = useSelector(selectDataNavigation)

  return (
    <header className={styles.Header}>
      <div className={styles.Header_logo}>
        <Link href="/">
          <a>
            <LogoSVG className={styles.Logo_svg} />
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          {dataNavigation.map((item) => (
            <li key={item.slug}>
              <Link href={`/` + item.slug}>
                <a>
                  <Lead>{item.name}</Lead>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.Header_controls}>
        <Small>Moscow 20:35</Small>
        {/* <button aria-label="Search"><Search /></button>
        <button aria-label="Login"><User /></button> */}
        <button aria-label="Menu" onClick={() => dispatch(openNavigation())}><ReactSVG src="/svg/burger.svg" /></button>
      </div>
    </header>
  )
}

export default Header