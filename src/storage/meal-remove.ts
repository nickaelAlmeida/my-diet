import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION_KEY } from './config';
import { Meal } from '../interfaces/meal';
import { mealsGetAll } from './meals-get-all';

export async function mealRemove (id: string): Promise<Meal[]> {
  try {

    const meals = await mealsGetAll();
    const filtered = meals.filter(({ id: mealId }) => mealId !== id);
    const data = JSON.stringify(filtered);

    await AsyncStorage.setItem(MEAL_COLLECTION_KEY, data);
    return filtered;

  } catch (error) {
    throw error;
  }
}
