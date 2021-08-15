import styles from './contacts.module.scss'

import { Plug } from 'components'

function Contacts() {

  return (
    <main className={styles.Contacts}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = {
    meta: {
      title: 'Contacts',
      description: 'Melishev ™ сontacts',
      canonical: 'contacts',
    }
  }

  return {
    props: data,
  }
}

export default Contacts