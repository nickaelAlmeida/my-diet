import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@pages/home';
import { Statistics } from '@pages/statistics';
import { MealAdd } from '@pages/meal/add';
import { MealShow } from '@pages/meal/show';
import { MealSuccess } from '@pages/meal/success';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes () {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal-add" component={MealAdd} />
      <Screen name="meal-show" component={MealShow} />
      <Screen name="meal-success" component={MealSuccess} />
    </Navigator>
  );
}
