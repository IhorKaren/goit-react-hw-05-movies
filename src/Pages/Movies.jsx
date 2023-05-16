import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchSearchMovies from '../services/GetSearchMovie';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }

    async function getMovies() {
      try {
        setLoading(true);

        const response = await fetchSearchMovies(movieName);
        setMovies(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [searchParams, movieName]);

  function onSubmit(data) {
    setSearchParams(data);
  }

  return (
    <div>
      {loading && <Loader />}
      <SearchBar onSubmit={onSubmit} />
      <MovieList array={movies} />
    </div>
  );
};

export default Movies;
