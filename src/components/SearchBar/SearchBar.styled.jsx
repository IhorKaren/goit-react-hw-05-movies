import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Form = styled.form`
  position: relative;
  padding-top: 40px;
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: royalblue;
  }
`;

const Button = styled.button`
  background-color: royalblue;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  transition: background-color 200ms linear;

  &:hover {
    background-color: #2ba1e0;
  }
`;

const Error = styled.div`
  position: absolute;
  bottom: -25%;
  color: red;
  animation: ${appear} 500ms ease-in-out;
`;

export { Form, Input, Button, Error };
