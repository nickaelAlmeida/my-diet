import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meal } from '@interfaces/meal';
import { MEAL_COLLECTION_KEY } from './config';

export async function mealsGetAll (): Promise<Meal[]> {
  try {

    // await AsyncStorage.removeItem(MEAL_COLLECTION_KEY);
    const data = await AsyncStorage.getItem(MEAL_COLLECTION_KEY);
    const meals: Meal[] = data ? JSON.parse(data) : [];

    return meals;

  } catch (error) {
    throw error;
  }
}
