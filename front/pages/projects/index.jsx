import styles from './projects.module.scss'

import axios from 'axios'

import Image from 'next/image'

function Projects({ projects }) {

  return (
    <main className={styles.Projects}>
      {projects.map(project => (
        <div key={project.slug} style={{width: `300px`}}>
          <p>{project.name}</p>
          <Image
            src={`${process.env.api}${project.photo.url}`}
            width={project.photo.width}
            height={project.photo.height}
            layout="responsive"
          />
        </div>
      ))}
    </main>
  )
}

export async function getStaticProps() {

  const data = await axios.get(`${process.env.api}/projects-page`)
    .then(res => {
      return res.data
    })
  
  const projects = await axios.get(`${process.env.api}/projects`)
    .then(res => {
      return res.data
    })

  return {
    props: {...data, projects},
  }
}

export default Projects