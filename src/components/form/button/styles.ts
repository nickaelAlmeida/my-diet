import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export type ButtonType = 'primary' | 'secondary';

export const Container = styled(TouchableOpacity)<{ type: ButtonType }>`

  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  border-radius: 6px;
  border-width: 1px;

  ${({ theme, type }) => css`
    border-color: ${theme.COLORS.GRAY_1};
    background-color: ${type === 'primary' ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_7};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<{ type: ButtonType }>(({ theme, type }) => ({
  size: 20,
  color: type === 'primary' ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_1,
}))``;

export const Label = styled.Text<{ type: ButtonType }>`

  margin: 0 10px;
  text-align: center;

  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'primary' ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_1};
  `}
`;
