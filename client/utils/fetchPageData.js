import axios from 'axios';

async function fetchPageData(slug) {
  const dataPage = await axios.get(`${process.env.api}/${slug}-page`)
    .then((res) => res.data)
    .catch(() => {
      return false;
    });

  return dataPage;
}

async function fetchArticleData(slug) {
  const dataPage = await axios.get(`${process.env.api}/articles/${slug}`)
    .then((res) => res.data)
    .catch(() => {
      return false;
    });

  return dataPage;
}

export { fetchPageData, fetchArticleData };
