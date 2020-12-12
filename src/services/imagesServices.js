const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '18966103-245a37f9e820c36a1856c1db9';

async function fetchImages({ imageName, currentPage }) {
  const searchQuery = `?q=${imageName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery}`);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    return error('Some error in fetch');
  }
}

const api = {
  fetchImages,
};

export default api;
