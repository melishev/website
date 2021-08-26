import styles from './news.module.scss'

import axios from 'axios'

import { Plug } from 'components'

import { fetchPageData } from 'utils/fetchPageData'

function News() {

  return (
    <main className={styles.News}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const dataPage = await fetchPageData('news')
  
  const notFound = dataPage ? false : true

  return {
    props: {
      ...dataPage
    },
    notFound
  }
}

export default News