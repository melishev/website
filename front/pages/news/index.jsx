import styles from './news.module.scss'

import { Plug } from 'components'

function News() {

  return (
    <main className={styles.News}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = {
    meta: {
      title: 'News',
      description: 'News created inside Melishev ™',
      canonical: 'news',
    }
  }

  return {
    props: data,
  }
}

export default News