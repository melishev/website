import styles from 'styles/modules/header.module.scss'

import { Page, Text, Loading } from '@geist-ui/react'

const header = () => {
  
  return (
    <Page.Header className={styles.Header}>
      <Text h1 size="2rem">Melishev</Text>
      <Loading />
      <Loading />
    </Page.Header>
  )
}

export default header