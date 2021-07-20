import styles from 'styles/components/header.module.scss'

import Link from 'next/link'

import { Menu, User, Search } from '@geist-ui/react-icons'

import { useDispatch, useSelector } from 'react-redux'
import { changeNavigation, selectNavigation } from 'redux/state/modals'


const Header = () => {

  const dispatch = useDispatch()

  const Navigation = useSelector(selectNavigation)

  return (
    <header className={styles.Header}>
      <div className={styles.Header_logo}>
        <Link href="/"><a>Melishev ™{/* <span> | Cheel</span> */}</a></Link>
      </div>
      <nav>
        <ul>
          {Navigation.items.map((item) => (
            <li key={item.slug}><Link href={`/` + item.slug}><a>{item.name}</a></Link></li>
          ))}
        </ul>
      </nav>
      <div className={styles.Header_controls}>
        <button><Search /></button>
        <button><User /></button>
        <button onClick={() => dispatch(changeNavigation())}><Menu /></button>
      </div>
    </header>
  )
}

export default Header