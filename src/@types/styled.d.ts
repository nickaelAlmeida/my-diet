/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components/native';
import { standard } from '@theme';

declare module 'styled-components/native' {
  type ThemeType = typeof standard;
  export interface DefaultTheme extends ThemeType {}
}
