import styled, { css } from 'styled-components/native';

export type Color = 'green' | 'red';

export const Container = styled.TouchableOpacity<{ color: Color; isChecked: boolean; }>`

  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 50px;

  border-radius: 6px;
  border-width: 1px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_6};
    background-color: ${theme.COLORS.GRAY_6};
  `}

  ${({ theme, color, isChecked }) => isChecked && css`
    border-color: ${color === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    background-color: ${color === 'green' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
  `}
`;

export const Circle = styled.View<{ color: Color; }>`

  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ theme, color }) => css`
    background-color: ${color === 'green' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
  `}
`;

export const Label = styled.Text`
  margin-left: 10px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
