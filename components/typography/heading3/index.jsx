import styles from './heading.module.scss'

const Heading3 = ({ children }) => {
  return (
    <h3 className={styles.Heading}>{children}</h3>
  )
}

export default Heading3
