import styled from 'styled-components/native';

export const Container = styled.View`

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'small',
  color: theme.COLORS.GRAY_1
}))``;
