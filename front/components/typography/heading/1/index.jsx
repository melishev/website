import styles from './styles.module.scss'

const Heading1 = ({ children }) => {
  return (
    <h1 className={styles.Heading}>{children}</h1>
  )
}

export default Heading1
