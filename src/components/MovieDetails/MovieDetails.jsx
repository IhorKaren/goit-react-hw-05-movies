import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieByID from 'services/GetMovieById';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const response = await fetchMovieByID(movieId);
      setMovie(response);
      setGenres(response.genres);
    }

    getMovie();
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      <MovieInfo movie={movie} genres={genres} />
    </div>
  );
};

export default MovieDetails;
