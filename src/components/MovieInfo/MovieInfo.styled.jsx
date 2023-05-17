import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 22px;
  padding: 0;
`;

const Thumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export { List, Thumb, Container };
