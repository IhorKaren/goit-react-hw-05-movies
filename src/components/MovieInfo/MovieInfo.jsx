import { List, Thumb, Container } from './MovieInfo.styled';

const MovieInfo = ({ movie, genres }) => {
  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <List>
        <Thumb>
          <li>
            <h2>{movie.original_title}</h2>
            <p>
              {(movie.vote_average * 10).toFixed(2).replace(/\.?0+$/, '') + '%'}
            </p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
            <p>{genres.map(el => el.name).join(', ')}</p>
          </li>
        </Thumb>
      </List>
    </Container>
  );
};

export default MovieInfo;
