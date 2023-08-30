import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  margin-bottom: 5px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Date = styled.Text`
  margin: 40px 0 5px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Status = styled.View`

  flex-direction: row;
  align-items: center;

  width: 50%;
  height: 35px;
  margin-top: 40px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const StatusCircle = styled.View<{ within: boolean; }>`

  width: 8px;
  height: 8px;
  margin: 0 10px 0 15px;
  border-radius: 4px;

  ${({ theme, within }) => css`
    background-color: ${within ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
