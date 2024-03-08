import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmZlMzc3ZGI4MWRhMzk2NDFmYmQwZDk3ZWUxNTc3YSIsInN1YiI6IjY1ZTg2MmE2YTZjMTA0MDE2NGU4ZGQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3fe2sU4ROMMkK2W0PW1DRBsSAxc9Q944JcYGCxL2rg',
  },
};

// const url =
//   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const url = 'trending/movie/day?language=en-US';

export const getMovies = async () => {
  const response = await axios.get(url, options);
  console.log('JS response.data', response.data);
  return response.data;
};
