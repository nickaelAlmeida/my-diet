import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Meal } from '@interfaces/meal';
import { mealsGetAll } from '@storage/meals-get-all';
import { mealAdd } from '@storage/meal-add';
import { mealRemove } from '@storage/meal-remove';
import { mealEdit } from '@storage/meal-edit';
import {
  calcBestSequenceWithinDiet,
  calcPercWithinDiet,
  calcTotWithin
} from '@utils/calculations';

export function useMeal () {

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meal[]>([]);

  const [
    totMeals,
    totWithin,
    totOutside,
    percWithinDiet,
    bestSeqWithinDiet
  ] = useMemo(() => {

    if (meals.length === 0) {
      return [0, 0, 0, 0];
    }

    const totWithin = calcTotWithin(meals);
    const percWithinDiet = calcPercWithinDiet(meals);
    const bestSeqWithinDiet = calcBestSequenceWithinDiet(meals);

    return [
      meals.length,
      totWithin,
      meals.length - totWithin,
      percWithinDiet,
      bestSeqWithinDiet
    ];
  }, [meals]);

  const mealsList = useMemo(() => {

    const sectionedListData: {
      title: string;
      data: Meal[];
    }[] = [];

    meals.forEach(item => {
      const existingSection = sectionedListData.find(section => section.title === item.date);
      if (existingSection) {
        existingSection.data.push(item);
      } else {
        sectionedListData.push({
          title: item.date,
          data: [item],
        });
      }
    });

    sectionedListData.sort((a, b) => b.title.localeCompare(a.title));
    sectionedListData.forEach(section => {
      section.data.sort((a, b) => b.time.localeCompare(a.time));
    });

    return sectionedListData;

  }, [meals]);

  const getAll = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await mealsGetAll();
      setMeals(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('My Diet', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const getMeal = (id: string): Meal => {
    return meals.find(item => item.id === id) as Meal;
  };

  const add = async (meal: Omit<Meal, 'id'>): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await mealAdd(meal);
      setMeals(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('My Diet', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const edit = async (meal: Meal): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await mealEdit(meal);
      setMeals(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('My Diet', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const removeConfirm = async (id: string): Promise<void> => {
    try {
      const newList = await mealRemove(id);
      setMeals(newList);
      navigation.navigate('home');
    } catch (error) {
      Alert.alert('My Diet', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const remove = async (id: string): Promise<void> => {
    Alert.alert(
      'Remove Meal',
      'Are you sure you want to remove the meal?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', onPress: () => removeConfirm(id) }
      ]
    );
  };

  useFocusEffect(useCallback(() => {
    getAll();
  }, []));

  return {
    isLoading,
    meals,
    mealsList,
    totMeals,
    totWithin,
    totOutside,
    percWithinDiet,
    bestSeqWithinDiet,
    getAll,
    getMeal,
    add,
    edit,
    remove
  };
}
