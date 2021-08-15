import styles from './products.module.scss'

import axios from 'axios'

import { Plug } from 'components'

function Products() {

  return (
    <main className={styles.Products}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = await axios.get('http://localhost:1337/products')
    .then(res => {
      return res.data
    })

  return {
    props: data,
  }
}

export default Products