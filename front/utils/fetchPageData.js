import axios from 'axios'

export async function fetchPageData(slug) {
  
  const dataPage = await axios.get(`${process.env.api}/${slug}-page`)
    .then(res => res.data)
    .catch(err => {
      return false
    })

  return dataPage
}