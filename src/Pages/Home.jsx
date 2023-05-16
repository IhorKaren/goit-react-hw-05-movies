import { useState, useEffect } from 'react';
import fetchTrandingMovies from '../services/GetTrandingMovie';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieList() {
      try {
        setLoading(true);
        const response = await fetchTrandingMovies();
        setMovieList([...response]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getMovieList();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <h1>Trending today</h1>
      <MovieList array={movieList} />
    </>
  );
};

export default Home;
