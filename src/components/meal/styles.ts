import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`

  flex-direction: row;
  align-items: center;

  padding: 15px 10px;
  margin-bottom: 15px;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Line = styled.View`

  width: 1px;
  height: 100%;

  margin: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Description = styled.Text`

  flex: 1;
  margin-right: 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Status = styled.View<{ within: boolean; }>`

  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, within }) => within ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
