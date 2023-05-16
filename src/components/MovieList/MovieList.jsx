import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ array }) => {
  const location = useLocation();
  const routeName = location.pathname.includes('/movies') ? '' : 'movies/';

  return (
    <ul>
      {array.map(el => {
        return (
          <li key={el.id}>
            <Link to={`${routeName}${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
