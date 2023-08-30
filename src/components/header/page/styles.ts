import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { standard } from '@theme';

type ColorsStandard = keyof typeof standard.COLORS;
export type Colors = 'green' | 'red' | 'gray';

export const Container = styled.View<{ color: Colors; }>`

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 24px 24px;
  background-color: ${({ theme, color }) => color === 'gray' ? theme.COLORS.GRAY_6 : theme.COLORS[`${color.toUpperCase()}_LIGHT` as ColorsStandard]};
`;

export const Column = styled.View`
  width: 50px;
  min-height: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<{ color: Colors; }>(({ theme, color }) => ({
  size: 24,
  color: color === 'gray' ? theme.COLORS.GRAY_2 : theme.COLORS[`${color.toUpperCase()}_DARK`],
}))``;
