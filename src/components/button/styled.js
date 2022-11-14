import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 130px;
  height: 60px;
  border: none;
  border-radius: 10px;
  transition: all 0.5s;
  &:active {
    transform: scale(0.87);
  }
  background-color: #000000;
  color: white;
`;
