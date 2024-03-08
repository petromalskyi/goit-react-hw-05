import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../movies-api';

// import { Suspense, lazy } from 'react';
// const MovieList = lazy(() => import('../../components/MovieList/MovieList'));
// const getMovies = lazy(() => import('../../movies-api'));

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovies();

        console.log('data', data);
        console.log('data.results', data.results);
        setMovies(data);
        console.log('movies', movies);
        console.log('movies.results', movies.results);
      } catch (error) {
        console.log('error');
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {console.log('HomePage movies', movies)}
      {movies.length > 0 && <MovieList results={movies.results}></MovieList>}
    </div>
  );
}
