import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, Link } from './MovieList.styled';

const MovieList = ({ array }) => {
  const location = useLocation();
  const routeName = location.pathname.includes('/movies') ? '' : 'movies/';

  return (
    <List>
      {array.map(el => {
        return (
          <li key={el.id}>
            <Link to={`${routeName}${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        );
      })}
    </List>
  );
};

export default MovieList;
