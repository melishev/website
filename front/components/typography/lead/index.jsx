import styles from './styles.module.scss'

const Lead = ({ children }) => {
  return (
    <span className={styles.Lead}>{children}</span>
  )
}

export default Lead
