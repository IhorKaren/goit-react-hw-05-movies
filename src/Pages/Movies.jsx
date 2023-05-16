import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import fetchSearchMovies from '../services/GetSearchMovie';
import MovieList from '../components/MovieList/MovieList';

const validationSchema = Yup.object().shape({
  movieSearch: Yup.string().trim().required('Search field cannot be empty'),
});

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }

    async function getMovies() {
      const response = await fetchSearchMovies(movieName);

      setMovies(response);
    }

    getMovies();
  }, [searchParams, movieName]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitForm = (data, e) => {
    setSearchParams({ query: data.movieSearch });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {errors.movieSearch && <div>{errors.movieSearch?.message}</div>}
        <input name="movieSearch" type="text" {...register('movieSearch')} />
        <button type="submit">Search</button>
      </form>
      <MovieList array={movies} />
    </div>
  );
};

export default Movies;
