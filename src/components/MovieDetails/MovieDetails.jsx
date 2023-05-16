import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import fetchMovieByID from 'services/GetMovieById';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const response = await fetchMovieByID(movieId);
        setMovie(response);
        setGenres(response.genres);
      } catch {
        alert('error');
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <MovieInfo movie={movie} genres={genres} />
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
