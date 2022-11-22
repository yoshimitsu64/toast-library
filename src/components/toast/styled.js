import styled from 'styled-components';

export const StyledToast = styled.div`
  position: relative;
  font-weight: 700;
  pointer-events: all;
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  align-items: center;
  background-color: ${({ theme }) => theme.toastBackgroundColor};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  width: ${({ theme }) => theme.sizes.width[1]}px;
  min-height: ${({ theme }) => theme.sizes.minHeight[0]}px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow[0]};
  padding: ${({ theme }) => theme.space.padding[0]}px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color};
  margin-top: ${({ theme }) => theme.space?.marginTop[0]}px;
  ${({ theme }) => theme.horizontalMargin};
  ${({ animationType }) => animationType?.open};
  &.close {
    ${({ animationType }) => animationType?.close};
    animation-fill-mode: forwards;
  }
  & > :first-child {
    margin-right: ${({ theme }) => theme.space?.marginRight[5]}px;
  }
  &::before {
    content: attr(data-topic);
    position: absolute;
    top: 4px;
  }
`;

export const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.marginTop[0]}px;
  font-size: ${({ theme }) => theme.fontSizes.fontSize[2]}px;
  & > * {
    margin-right: ${({ theme }) => theme.space?.marginRight[0]}px;
  }
`;

export const StyledCross = styled.div`
  align-self: flex-start;
  cursor: pointer;
`;
