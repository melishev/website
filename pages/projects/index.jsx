import styles from './projects.module.scss'

import { Plug } from 'components'

function Projects() {

  return (
    <main className={styles.Projects}>
      <Plug />
    </main>
  )
}

export async function getStaticProps() {

  const data = {
    meta: {
      title: 'Projects',
      description: 'Projects created inside Melishev ™',
      canonical: 'projects',
    }
  }

  return {
    props: data,
  }
}

export default Projects