import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieCasts from 'services/GetMovieCasts';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const response = await fetchMovieCasts(movieId);
      setCast(response);
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(el => {
          return (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                alt={el.name}
              />
              <h5>{el.name}</h5>
              <p>{el.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
