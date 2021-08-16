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

  const data = await axios.get(`${process.env.api}/news-page`)
    .then(res => {
      return res.data
    })

  return {
    props: data,
  }
}

export default News