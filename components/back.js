import { useSelector } from 'react-redux'
import { selectNavigation } from 'redux/state/modals'
import styles from 'styles/components/back.module.scss'

const Back = () => {

  const Navigation = useSelector(selectNavigation)

  return (
    <div className={styles.Back + ' ' + (Navigation.open ? styles.Back_open : '')}>
        
    </div>
  )
}

export default Back
