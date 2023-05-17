import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieCasts from 'services/GetMovieCasts';
import { List, Image } from './Cast.styled';
import notFoundImage from '../images/notFound.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetchMovieCasts(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.map(el => {
          const imageUrl = el.profile_path
            ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
            : notFoundImage;
          return (
            <li key={el.id}>
              <Image src={imageUrl} width="200" alt={el.name} />
              <h5>{el.name}</h5>
              <p>{el.character}</p>
            </li>
          );
        })}
      </List>
    </div>
  );
};

export default Cast;
