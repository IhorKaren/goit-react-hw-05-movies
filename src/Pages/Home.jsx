import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchTrandingMovies from '../services/GetTrandingMovie';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function getMovieList() {
      try {
        const response = await fetchTrandingMovies();
        setMovieList([...response]);
      } catch {
        toast(`Error`);
      }
    }

    getMovieList();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList array={movieList} />
      <ToastContainer />
    </>
  );
};

export default Home;
