import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation';
// import HomePage from '../../pages/HomePage/HomePage';
//import MoviesPage from '../../pages/MoviesPage/MoviesPage';
//import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage'),
);
const Navigation = lazy(() => import('../Navigation/Navigation'));

//1bfe377db81da39641fbd0d97ee1577a

export default function App() {
  return (
    <div>
      <Navigation></Navigation>

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
