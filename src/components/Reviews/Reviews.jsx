import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from 'services/GetMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(el => {
          return (
            <li key={el.id}>
              <h5>{el.author}</h5>
              <p>{el.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
