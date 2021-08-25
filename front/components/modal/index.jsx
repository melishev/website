import styles from './modal.module.scss'

import Link from 'next/link'

import { X } from '@geist-ui/react-icons'
import { Lead } from 'components/typography'

import { useDispatch, useSelector } from 'react-redux'
import { closeNavigation, selectModalNavigation } from 'redux/state/modals'
import { selectDataNavigation } from 'redux/state/global'

const Modal = () => {

  const dispatch = useDispatch()
  const modalNavigation = useSelector(selectModalNavigation)
  const dataNavigation = useSelector(selectDataNavigation)

  return (
    <div className={styles.ModalNavigation + ' ' + (modalNavigation.open ? styles.ModalNavigation_open : '')}>
      <div className={styles.ModalNavigation_top}><X onClick={() => dispatch(closeNavigation())} /></div>
      <nav>
        <ul>
          {dataNavigation.map((item) => (
            <li key={item.slug}><Link href={`/` + item.slug}><a><Lead>{item.name}</Lead></a></Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Modal