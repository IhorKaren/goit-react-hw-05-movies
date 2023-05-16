import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchSearchMovies from '../services/GetSearchMovie';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }

    async function getMovies() {
      try {
        const response = await fetchSearchMovies(movieName);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [searchParams, movieName]);

  function onSubmit(data) {
    setSearchParams(data);
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <MovieList array={movies} />
    </div>
  );
};

export default Movies;
