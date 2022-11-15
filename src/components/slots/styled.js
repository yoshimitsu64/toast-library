import styled from 'styled-components';

export const StyledSloatsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ margin }) => margin};
  &.top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &.top-left {
    top: 0;
    left: 0;
  }
  &.top-right {
    top: 0;
    right: 0;
  }
  &.bottom-left {
    bottom: 0;
    left: 0;
  }
  &.bottom-right {
    bottom: 0;
    right: 0;
  }
  &.bottom-center {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
