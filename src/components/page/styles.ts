import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { standard } from '@theme';

type ColorsStandard = keyof typeof standard.COLORS;
export type Colors = 'green' | 'red' | 'gray';

export const Container = styled(SafeAreaView).attrs({ edges: { top: 'additive', bottom: 'off' } })<{ color: Colors; }>`
  flex: 1;
  padding: 0;
  background-color: ${({ theme, color }) => color === 'gray' ? theme.COLORS.GRAY_6 : theme.COLORS[`${color.toUpperCase()}_LIGHT` as ColorsStandard]};
`;

export const Content = styled.View<{ color: Colors; }>`
  flex: 1;
  padding: 14px 24px 24px 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;
