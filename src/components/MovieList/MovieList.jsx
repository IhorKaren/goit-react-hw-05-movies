import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ array }) => {
  return (
    <ul>
      {array.map(el => {
        return (
          <li key={el.id}>
            <Link to={`movies/${el.id}`}>{el.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
