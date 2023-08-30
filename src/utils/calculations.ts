import { Meal } from '@interfaces/meal';

export function calcTotWithin (meals: Meal[]): number {
  return meals.reduce((count, item) => {
    return count + (item.within ? 1 : 0);
  }, 0);
}

export function calcPercWithinDiet (meals: Meal[]): number {
  const totWithin = calcTotWithin(meals);
  return Number(((totWithin * 100) / meals.length).toFixed(0));
}

export function calcBestSequenceWithinDiet (meals: Meal[]): number {

  const sortedRecords = meals.sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    } else {
      return a.time.localeCompare(b.time);
    }
  });

  let longestSequence = 0;
  let currentSequence = 0;

  sortedRecords.forEach(record => {
    if (record.within) {
      currentSequence++;
      longestSequence = Math.max(longestSequence, currentSequence);
    } else {
      currentSequence = 0;
    }
  });

  return longestSequence;
}
