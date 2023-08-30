import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { standard } from '@theme';

type ColorsStandard = keyof typeof standard.COLORS;
export type Colors = 'green' | 'red' | 'gray';

export const Container = styled.View<{ color: Colors; }>`

  align-items: center;
  padding: 10px 10px 20px;
  margin-bottom: 15px;

  border-radius: 8px;
  background-color: ${({ theme, color }) => color === 'gray' ? theme.COLORS.GRAY_6 : theme.COLORS[`${color.toUpperCase()}_LIGHT` as ColorsStandard]};
`;

export const Icon = styled(MaterialIcons).attrs<{ color: Colors; }>(({ theme, color }) => ({
  size: 24,
  color: color === 'gray' ? theme.COLORS.GRAY_2 : theme.COLORS[`${color.toUpperCase()}_DARK`],
}))`
  align-self: flex-end;
`;

export const Title = styled.Text<{ size: 'XX' | 'XL' }>`
  text-align: center;
  margin-bottom: 5px;
  ${({ theme, size }) => css`
    margin-top: ${size === 'XL' ? 10 : -10}px;
    font-size: ${theme.FONT_SIZE[size]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
