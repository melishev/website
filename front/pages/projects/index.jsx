import styles from './projects.module.scss'

import axios from 'axios'

import Image from 'next/image'
import { MaskImage } from 'components/utils'

function Projects({ projects }) {

  return (
    <main className={styles.Projects}>
      <div style={{width: `300px`, height: `600px`, border: `1px solid grey`, position: `relative`}}>
        <Image src={process.env.api + `/uploads/IMG_9325_e250a5cd4a.jpg`} width={3024} height={1557} layout="fill" objectFit="contain" objectPosition="center" />
      </div>
      <div style={{width: `300px`, height: `600px`, border: `1px solid grey`, position: `relative`}}>
        <Image src={process.env.api + `/uploads/IMG_9325_e250a5cd4a.jpg`} width={3024} height={1557} layout="fill" objectFit="cover" objectPosition="center" />
      </div>
      <div style={{width: `300px`, height: `600px`, border: `1px solid grey`, position: `relative`}}>
        <Image src={process.env.api + `/uploads/IMG_9325_e250a5cd4a.jpg`} width={3024} height={1557} layout="responsive" />
      </div>
    </main>
  )
}

export async function getStaticProps() {

  const { data } = await axios.get(`${process.env.api}/projects-page`)
  
  const projects = await axios.get(`${process.env.api}/projects`)
    .then(res => {
      return res.data
    })

  return {
    props: {...data, projects},
  }
}

export default Projects