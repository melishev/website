import styles from 'scss/pages/home.module.scss'

import  { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from 'components/typography'
// import { Plug } from 'components'

function Home() {

  return (
    <main className={styles.Home}>
      {/* <Plug /> */}
      <Heading1>Hello, world!</Heading1>
      <Heading2>Hello, world!</Heading2>
      <Heading3>Hello, world!</Heading3>
      <Heading4>Hello, world!</Heading4>
      <Heading5>Hello, world!</Heading5>
      <Heading6>Hello, world!</Heading6>
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