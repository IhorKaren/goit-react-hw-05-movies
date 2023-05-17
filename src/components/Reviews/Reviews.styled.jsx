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
  list-style: none;
  animation: ${appear} 500ms ease-in-out;
`;

export { List };
