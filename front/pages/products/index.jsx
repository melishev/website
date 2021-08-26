import styles from './products.module.scss'

import axios from 'axios'

import { Plug } from 'components'

import { fetchPageData } from 'utils/fetchPageData'

function Products() {

  return (
    <main className={styles.Products}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const dataPage = await fetchPageData('products')
  
  const notFound = dataPage ? false : true

  return {
    props: {
      ...dataPage
    },
    notFound
  }
}

export default Products