import styles from './styles.module.scss'

const Subtitle = ({ children }) => {
  return (
    <p className={styles.Subtitle}>{children}</p>
  )
}

export default Subtitle
