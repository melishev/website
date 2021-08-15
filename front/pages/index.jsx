import styles from 'scss/pages/home.module.scss'

import { Plug } from 'components'

function Home() {

  return (
    <main className={styles.Home}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = {
    meta: {
      title: 'Home',
      description: 'Melishev ™ is a space where works, news and products created by creative and talented people are demonstrated.',
      canonical: '',
    }
  }

  return {
    props: data,
  }
}

export default Home