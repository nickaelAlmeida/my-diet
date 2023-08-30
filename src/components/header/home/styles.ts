import styled from 'styled-components/native';

export const Container = styled.View`

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
`;

export const User = styled.View`

  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const UserImage = styled.Image`

  width: 40px;
  height: 40px;

  border-radius: 20px;
`;
