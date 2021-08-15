import styles from './news.module.scss'

import axios from 'axios'

import { Plug } from 'components'

function News() {

  return (
    <main className={styles.News}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = await axios.get('http://localhost:1337/newsroom')
    .then(res => {
      return res.data
    })

  return {
    props: data,
  }
}

export default News