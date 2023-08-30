/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Loading } from '@components/loading';
import { standard } from '@theme';
import { Routes } from './routes';

export function App () {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={standard}>
      <StatusBar style="dark" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
