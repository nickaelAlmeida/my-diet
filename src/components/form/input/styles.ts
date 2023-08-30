import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Field = styled.TextInput`

  border-radius: 6px;
  border-width: 1px;

  ${({ theme, multiline }) => css`

    height: ${multiline ? 120 : 48}px;
    padding: ${multiline ? 15 : 0}px 15px;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    border-color: ${theme.COLORS.GRAY_5};
  `}
`;
