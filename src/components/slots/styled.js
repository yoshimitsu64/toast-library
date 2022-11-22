import styled from 'styled-components';

export const StyledSloatsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ margin }) => margin};
  ${({ position }) => position}
`;
