import styled, { css } from 'styled-components/native';

export const Percentage = styled.Text`

  margin-top: -25px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XX}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Description = styled.Text`

  margin-bottom: 30px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Title = styled.Text`

  margin: 30px 0;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const SmallInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
