import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`

  flex: 1;
  justify-content: center;
  align-items: center;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Message = styled.Text`

  text-align: center;
  margin-bottom: 3px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_3};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 100,
  color: theme.COLORS.GRAY_4
}))`
  margin: 60px 0 30px;
`;
