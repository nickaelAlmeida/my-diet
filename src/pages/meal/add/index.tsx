/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useMeal } from '@hooks/meal';
import { Page } from '@components/page';
import { Header } from '@components/header/page';
import { Input } from '@components/form/input';
import { Button } from '@components/form/button';
import { isAndroid, isIOS } from '@utils/platform';
import { RadioBox } from '@components/radio-box';
import { Label } from './styles';

export function MealAdd () {

  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as { id: string; };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [within, setWithin] = useState<'Yes' | 'No'>();

  const { meals, getMeal, add, edit } = useMeal();

  const handleSave = () => {
    try {

      if (!name) throw new Error('Name is required.');
      if (!description) throw new Error('Description is required.');
      if (!date) throw new Error('Date is required.');
      if (!time) throw new Error('Time is required.');

      if (!id) {
        add({
          date,
          time,
          name,
          description,
          within: within === 'Yes'
        });
      } else {
        edit({
          id,
          date,
          time,
          name,
          description,
          within: within === 'Yes'
        });
      }

      navigation.navigate('meal-success', { within: within === 'Yes' });

    } catch (error: any) {
      Alert.alert('New Meal', error.message);
    }
  };

  useEffect(() => {
    if (!id || !meals) return;

    const currentMeal = getMeal(id);
    if (!currentMeal) return;

    setName(currentMeal.name);
    setDescription(currentMeal.description);
    setDate(currentMeal.date);
    setTime(currentMeal.time);
    setWithin(currentMeal.within ? 'Yes' : 'No');
  }, [id, meals]);

  return (
    <Page
      color="gray"
      header={(<Header color="gray" title="New Meal" />)}
    >
      <KeyboardAvoidingView
        behavior={isIOS() ? 'padding' : 'height'}
        keyboardVerticalOffset={isAndroid() ? 20 : 0}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, marginTop: 14 }}>
            <Input
              label="Name"
              autoCapitalize="words"
              autoCorrect={false}
              value={name}
              onChangeText={setName}
            />

            <Input
              label="Description"
              autoCapitalize="sentences"
              autoCorrect={true}
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Input
                  label="Date"
                  autoCorrect={false}
                  value={date}
                  onChangeText={setDate}
                />
              </View>

              <View style={{ flex: 1, marginLeft: 10 }}>
                <Input
                  label="Time"
                  autoCorrect={false}
                  value={time}
                  onChangeText={setTime}
                />
              </View>
            </View>

            <Label>Within the diet?</Label>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <RadioBox color="green" label="Yes" isChecked={(within === 'Yes')} onPress={() => setWithin('Yes')} />
              </View>

              <View style={{ flex: 1, marginLeft: 10 }}>
                <RadioBox color="red" label="No" isChecked={(within === 'No')} onPress={() => setWithin('No')} />
              </View>
            </View>
          </View>

          <Button
            label="Save Meal"
            onPress={handleSave}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Page>
  );
}
