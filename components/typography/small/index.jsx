import styles from './styles.module.scss'

const Small = ({ children }) => {
  return (
    <small className={styles.Small}>{children}</small>
  )
}

export default Small
