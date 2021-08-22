import styles from './header.module.scss'

import Link from 'next/link'

import LogoSVG from 'public/svg/logo.svg'

import { Text, Lead } from 'components/typography'

import { useDispatch, useSelector } from 'react-redux'
import { changeNavigation, selectNavigation } from 'redux/state/modals'

import { ReactSVG } from 'react-svg'


const Header = () => {

  const dispatch = useDispatch()

  const Navigation = useSelector(selectNavigation)

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
          {Navigation.items.map((item) => (
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
        <Text>Moscow 20:35</Text>
        {/* <button aria-label="Search"><Search /></button>
        <button aria-label="Login"><User /></button> */}
        <button aria-label="Menu" onClick={() => dispatch(changeNavigation())}><ReactSVG src="/svg/burger.svg" /></button>
      </div>
    </header>
  )
}

export default Header