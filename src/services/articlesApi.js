import axios from 'axios';

const fetchArticlesWithQuery = searchQuery => {
  return axios
    .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    .then(response => response.data.hits);
};
// eslint-disable-next-line
export default { fetchArticlesWithQuery };
