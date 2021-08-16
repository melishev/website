import styles from 'scss/pages/home.module.scss'

import axios from 'axios'

import { Plug } from 'components'

function Home() {

  return (
    <main className={styles.Home}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = await axios.get(`${process.env.api}/main-page`)
    .then(res => {
      return res.data
    })

  return {
    props: data,
  }
}

export default Home