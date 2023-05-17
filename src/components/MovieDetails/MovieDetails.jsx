import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import fetchMovieByID from 'services/GetMovieById';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
import {
  Container,
  ThumbList,
  StyledLink,
  GoBack,
} from './MovieDatails.styled';

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
    <Container>
      {loading && <Loader />}
      <GoBack to={backLinkLocationRef.current}>Go back</GoBack>
      <MovieInfo movie={movie} genres={genres} />
      <ThumbList>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </ThumbList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
