const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '18966103-245a37f9e820c36a1856c1db9';

async function fetchImages({ searchImage, currentPage }) {
  const searchQuery = `?q=${searchImage}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery}`);
    const data = await response.json();
    console.log(response);
    console.log(data.hits);
    return data.hits;
  } catch (error) {
    return error('Some error in fetch');
  }
}

// function fetchImages({ searchImage, currentPage }) {
// const searchQuery = `?image_type=photo&orientation=horizontal&q=${searchImage}&page=${currentPage}&per_page=12&key=${API_KEY}`;

//   return fetch(`${BASE_URL}/${searchQuery}`).then(response => {
//     if (response.ok) {
//       const data = response;

//       return console.log(data);
//     }

//     return Promise.reject(
//       new Error(`Немає картинки з такою назвою ${searchImage}`),
//     );
//   });
// }

const api = {
  fetchImages,
};

export default api;
