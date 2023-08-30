import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION_KEY } from './config';
import { Meal } from '../interfaces/meal';
import { mealsGetAll } from './meals-get-all';

export async function mealEdit (meal: Meal): Promise<Meal[]> {
  try {

    const meals = await mealsGetAll();
    const updated = meals.map(item => item.id === meal.id ? meal : item);
    const data = JSON.stringify(updated);

    await AsyncStorage.setItem(MEAL_COLLECTION_KEY, data);
    return updated;

  } catch (error) {
    throw error;
  }
}
