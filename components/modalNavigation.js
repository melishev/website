import styles from 'styles/components/modalNavigation.module.scss'

import Link from 'next/link'

import { X } from '@geist-ui/react-icons'

import { useDispatch, useSelector } from 'react-redux'
import { changeNavigation, selectNavigation } from 'redux/state/modals'

const ModalNavigation = () => {

  const dispatch = useDispatch()
  const Navigation = useSelector(selectNavigation)

  return (
    <div className={styles.ModalNavigation + ' ' + (Navigation.open ? styles.ModalNavigation_open : '')}>
      <div className={styles.ModalNavigation_top}><X onClick={() => dispatch(changeNavigation())} /></div>
      <nav>
        <ul>
          {Navigation.items.map((item) => (
            <li key={item.slug}><Link href={`/` + item.slug}><a>{item.name}</a></Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ModalNavigation;
