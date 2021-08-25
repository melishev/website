import styles from './modal.module.scss'

import Link from 'next/link'

import { X } from '@geist-ui/react-icons'
import { Lead } from 'components/typography'

import { useDispatch, useSelector } from 'react-redux'
import { changeNavigation, selectNavigation } from 'redux/state/modals'

const Modal = () => {

  const dispatch = useDispatch()
  const navigation = useSelector(selectNavigation)

  return (
    <div className={styles.ModalNavigation + ' ' + (navigation.open ? styles.ModalNavigation_open : '')}>
      <div className={styles.ModalNavigation_top}><X onClick={() => dispatch(changeNavigation())} /></div>
      <nav>
        <ul>
          {navigation.items.map((item) => (
            <li key={item.slug}><Link href={`/` + item.slug}><a><Lead>{item.name}</Lead></a></Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Modal