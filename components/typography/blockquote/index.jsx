import styles from './styles.module.scss'

const Blockquote = ({ children }) => {
  return (
    <blockquote className={styles.Blockquote}>{children}</blockquote>
  )
}

export default Blockquote
