import styled from 'styled-components';

import { theme } from '@constants/theme';

export const StyledButton = styled.button`
  width: ${theme.sizes.width[0]}px;
  height: ${theme.sizes.height[0]}px;
  border: none;
  border-radius: ${theme.borders.borderRadius[0]}px;
  transition: all 0.5s;
  &:active {
    transform: scale(0.87);
  }
  background-color: ${theme.colors.color[0]};
  color: ${theme.colors.color[1]};
`;
