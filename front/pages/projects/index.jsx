import styles from './projects.module.scss'

import axios from 'axios'

import { Plug } from 'components'

import { fetchPageData } from 'utils/fetchPageData'

function Projects({ projects }) {

  return (
    <main className={styles.Projects}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const dataPage = await fetchPageData('projects')
  
  const notFound = dataPage ? false : true

  return {
    props: {
      ...dataPage
    },
    notFound
  }
}

export default Projects