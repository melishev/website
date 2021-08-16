import styles from './contacts.module.scss'

import axios from 'axios'

import { Plug } from 'components'

function Contacts() {

  return (
    <main className={styles.Contacts}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = await axios.get(`${process.env.api}/contacts-page`)
    .then(res => {
      return res.data
    })

  return {
    props: data,
  }
}

export default Contacts