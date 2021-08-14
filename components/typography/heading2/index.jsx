import styles from './heading.module.scss'

const Heading2 = ({ children }) => {
  return (
    <h2 className={styles.Heading}>{children}</h2>
  )
}

export default Heading2
