import styles from './heading.module.scss'

const Heading4 = ({ children }) => {
  return (
    <h4 className={styles.Heading}>{children}</h4>
  )
}

export default Heading4
