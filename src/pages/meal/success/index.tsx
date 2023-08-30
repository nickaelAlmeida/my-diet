import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Page } from '@components/page';
import { Button } from '@components/form/button';
import { Container, Description, Title } from './styles';
import imageSuccess from '@assets/meal-success.png';
import imageError from '@assets/meal-error.png';

export function MealSuccess () {

  const navigation = useNavigation();
  const route = useRoute();

  const { within } = route.params as { within: boolean; };

  return (
    <Page>
      <Container>
        <Title within={within}>{within ? 'Keep it up!' : 'What a pity!'}</Title>
        <Description>{within ? 'You\'re still within the diet. Well done!' : 'You went off the diet this time, but keep trying and don\'t give up!'}</Description>
        <Image source={within ? imageSuccess : imageError} style={{ marginBottom: 30 }} />
        <Button label="Go to Home" onPress={() => navigation.navigate('home')} />
      </Container>
    </Page>
  );
}
