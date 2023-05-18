import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding-top: 40px;
`;

const Information = styled.p`
  margin: 5px 5px 0 70px;
`;

const ThumbList = styled.div`
  display: flex;
  margin-left: 90px;
  gap: 10px;
`;

const GoBack = styled(Link)`
  background-color: royalblue;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  transition: background-color 200ms linear;

  &:hover {
    background-color: #2ba1e0;
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
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

export { Container, ThumbList, StyledLink, GoBack, Information };
