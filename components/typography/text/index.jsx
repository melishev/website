import styles from './styles.module.scss'

const Text = ({ children }) => {
  return (
    <p className={styles.Text}>{children}</p>
  )
}

export default Text
