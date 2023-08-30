import { View } from 'react-native';
import { PERC_MIN_WITHIN_MEAL } from '@config/meal';
import { useMeal } from '@hooks/meal';
import { Page } from '@components/page';
import { Header } from '@components/header/page';
import { Info } from '@components/info';
import { Description, Percentage, SmallInfo, Title } from './styles';

export function Statistics () {

  const {
    totMeals,
    totWithin,
    totOutside,
    percWithinDiet,
    bestSeqWithinDiet
  } = useMeal();

  const pageColor = percWithinDiet >= PERC_MIN_WITHIN_MEAL ? 'green' : 'red';

  return (
    <Page
      color={pageColor}
      header={(
        <>
          <Header color={pageColor} />
          <Percentage>{percWithinDiet}%</Percentage>
          <Description>of meals within the diet</Description>
        </>
      )}
    >
      <Title>General Statistics</Title>

      <Info title={`${bestSeqWithinDiet}`} description="best sequence of dishes within the diet" />
      <Info title={`${totMeals}`} description="recorded meals" />

      <SmallInfo>
        <View style={{ flex: 1, marginRight: 7.5 }}>
          <Info color="green" title={`${totWithin}`} description="meals within the diet" />
        </View>

        <View style={{ flex: 1, marginLeft: 7.5 }}>
          <Info color="red" title={`${totOutside}`} description="meals outside the diet" />
        </View>
      </SmallInfo>
    </Page>
  );
}
