import styles from './styles.module.scss'

const Input = ({ children }) => {
  return (
    <span className={styles.Input}>{children}</span>
  )
}

export default Input
