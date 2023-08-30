import { SectionList, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PERC_MIN_WITHIN_MEAL } from '@config/meal';
import { useMeal } from '@hooks/meal';
import { Page } from '@components/page';
import { Header } from '@components/header/home';
import { Info } from '@components/info';
import { Button } from '@components/form/button';
import { Meal } from '@components/meal';
import { ListEmpty } from '@components/list-empty';
import { MealSectionTitle, Text } from './styles';

export function Home () {

  const navigation = useNavigation();
  const { mealsList, percWithinDiet } = useMeal();
  const pageColor = percWithinDiet >= PERC_MIN_WITHIN_MEAL ? 'green' : 'red';

  return (
    <Page>
      <Header />

      <TouchableOpacity onPress={() => navigation.navigate('statistics')}>
        <Info
          showIcon={true}
          color={pageColor}
          title={`${percWithinDiet}%`}
          description="of meals within the diet"
        />
      </TouchableOpacity>

      <Text>Meals</Text>
      <Button
        icon="add"
        label="Add meal"
        onPress={() => navigation.navigate('meal-add', { id: undefined })}
      />

      <View style={{ height: 20 }} />
      <SectionList
        sections={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meal
            time={item.time}
            description={item.name}
            within={item.within}
            onPress={() => navigation.navigate('meal-show', { id: item.id })}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <MealSectionTitle>{title}</MealSectionTitle>
        )}
        ListEmptyComponent={() => <ListEmpty />}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </Page>
  );
}
