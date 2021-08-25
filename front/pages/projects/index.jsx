import styles from './projects.module.scss'

import axios from 'axios'

import { Plug } from 'components'

function Projects({ projects }) {

  return (
    <main className={styles.Projects}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const { data } = await axios.get(`${process.env.api}/projects-page`)

  return {
    props: data
  }
}

export default Projects