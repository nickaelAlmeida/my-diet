import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { MEAL_COLLECTION_KEY } from './config';
import { Meal } from '../interfaces/meal';
import { mealsGetAll } from './meals-get-all';

export async function mealAdd (meal: Omit<Meal, 'id'>): Promise<Meal[]> {
  try {

    const meals = await mealsGetAll();
    const newList = [...meals, { ...meal, id: String(uuid.v4()) }];
    const data = JSON.stringify(newList);

    await AsyncStorage.setItem(MEAL_COLLECTION_KEY, data);
    return newList;

  } catch (error) {
    throw (error);
  }
}
