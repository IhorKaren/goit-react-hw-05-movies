import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;
  padding-left: 6px;
`;

const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  transition: color 200ms linear;

  :hover {
    color: royalblue;
  }

  &.active {
    color: royalblue;
  }
`;

export { List, Link };
