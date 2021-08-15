import styles from './projects.module.scss'

import axios from 'axios'

import { Plug } from 'components'

function Projects() {

  return (
    <main className={styles.Projects}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = await axios.get('http://localhost:1337/projects')
    .then(res => {
      return res.data
    })

  return {
    props: data,
  }
}

export default Projects