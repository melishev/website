import styles from './heading.module.scss'

const Heading6 = ({ children }) => {
  return (
    <h6 className={styles.Heading}>{children}</h6>
  )
}

export default Heading6
