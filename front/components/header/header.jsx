import styles from './header.module.scss'

import Link from 'next/link'

import { Menu, User, Search } from '@geist-ui/react-icons'

import { Logo } from 'components'
import { Text, Lead } from 'components/typography'

import { useDispatch, useSelector } from 'react-redux'
import { changeNavigation, selectNavigation } from 'redux/state/modals'


const Header = () => {

  const dispatch = useDispatch()

  const Navigation = useSelector(selectNavigation)

  return (
    <header className={styles.Header}>
      <div className={styles.Header_logo}>
        <Logo />
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
        <button aria-label="Menu" onClick={() => dispatch(changeNavigation())}><Menu /></button>
      </div>
    </header>
  )
}

export default Header