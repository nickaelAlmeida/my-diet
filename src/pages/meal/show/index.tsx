import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Meal } from '@interfaces/meal';
import { useMeal } from '@hooks/meal';
import { Page } from '@components/page';
import { Header } from '@components/header/page';
import { Button } from '@components/form/button';
import { Date, Status, StatusCircle, StatusText, Text, Title } from './styles';

export function MealShow () {

  const navigation = useNavigation();
  const route = useRoute();

  const [meal, setMeal] = useState<Meal>();
  const { meals, getMeal, remove } = useMeal();

  const { id } = route.params as { id: string; };
  const pageColor = meal?.within ? 'green' : 'red';

  useEffect(() => {
    if (!id || !meals) return;
    setMeal(getMeal(id));
  }, [id, meals]);

  return (
    <Page
      color={pageColor}
      header={(<Header color={pageColor} title="Meal" />)}
    >
      <View style={{ flex: 1, marginTop: 14 }}>
        <Title>{meal?.name}</Title>
        <Text>{meal?.description}</Text>

        <Date>Date/Time</Date>
        <Text>{meal?.date} at {meal?.time}</Text>

        <Status>
          <StatusCircle within={!!meal?.within} />
          <StatusText>{meal?.within ? 'Within the diet' : 'Outside the diet'}</StatusText>
        </Status>
      </View>

      <Button
        icon="edit"
        label="Edit Meal"
        marginBottom={10}
        onPress={() => navigation.navigate('meal-add', { id })}
      />

      <Button
        type="secondary"
        icon="delete-outline"
        label="Remove Meal"
        onPress={() => remove(id)}
      />
    </Page>
  );
}
