import styles from './heading.module.scss'

const Heading5 = ({ children }) => {
  return (
    <h5 className={styles.Heading}>{children}</h5>
  )
}

export default Heading5
