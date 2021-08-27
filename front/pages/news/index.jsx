import styles from './news.module.scss'

import Link from 'next/link'

import { Heading1 } from 'components/typography'
import { CardNewsBig, CardNewsSmall } from 'components'

import { fetchPageData } from 'utils/fetchPageData'
import axios from 'axios'

function News(props) {

  return (
    <main className={styles.News}>
      <section className={styles.News_section}>
        <Heading1>Новости</Heading1>
        <CardNewsBig />
        <div className={styles.News_section_cards}>
          {props.articles.map((article) => (
            <Link href={`/${article.slug}`} key={article.id}>
              <a>
                <CardNewsSmall media={article.media} category={article.category.name} title={article.title} date={article.date} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export async function getStaticProps() {

  const dataPage = await fetchPageData('news')
  const notFound = dataPage ? false : true

  const dataArticle = await axios.get(`${process.env.api}/articles`)

  return {
    props: {
      ...dataPage,
      articles: [...dataArticle.data]
    },
    notFound
  }
}

export default News