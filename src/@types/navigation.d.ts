export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      home: undefined;
      statistics: undefined;
      'meal-add': { id?: string; };
      'meal-show': { id: string; };
      'meal-success': { within: boolean; };
    }
  }
}
