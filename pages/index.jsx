import styles from 'scss/pages/home.module.scss'

import  { Text, Small, Strong, Subtitle, Blockquote } from 'components/typography'
// import { Plug } from 'components'

function Home() {

  return (
    <main className={styles.Home}>
      {/* <Plug /> */}
      <Text>Hello, world!</Text>
      <Small>Hello, world!</Small>
      <Strong>Hello, world!</Strong>
      <Subtitle>Hello, world!</Subtitle>
      <Blockquote>Hello, world!</Blockquote>
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