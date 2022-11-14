import styled from 'styled-components';

export const StyledSlot = styled.div`
  position: fixed;
  top: 200px;
  pointer-events: none;
  &.top-center {
    top: ${({ index }) => index * 80}px;
    margin-left: 50vw;
  }
  &.top-left {
    top: 1vh;
    left: 0px;
  }
  &.top-right {
    top: 1vh;
    right: 1vw;
  }
  &.bottom-left {
    bottom: 1vh;
    left: 0px;
  }
  &.bottom-right {
    bottom: 1vh;
    right: 1vw;
  }
  &.bottom-center {
    bottom: 0px;
    left: 50%;
    margin-left: -10rem;
  }
`;
