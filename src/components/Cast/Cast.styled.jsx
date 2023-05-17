import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  animation: ${appear} 500ms ease-in-out;
`;

const Image = styled.img`
  display: block;
  background-size: contain;
  height: 300px
`;

export { List, Image };
