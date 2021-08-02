import styles from './products.module.scss'

import { Plug } from 'components'

function Products() {

  return (
    <main className={styles.Products}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = {
    meta: {
      title: 'Products',
      description: 'Products created inside Melishev ™',
      canonical: 'products',
    }
  }

  return {
    props: data,
  }
}

export default Products