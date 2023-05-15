import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
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

  return (
    <div>
      <MovieInfo movie={movie} genres={genres} />
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
