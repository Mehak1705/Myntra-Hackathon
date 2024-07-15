import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ModifyMeasurementsScreen from './screens/ModifyMeasurementsScreen';
import TryOnOutfitsScreen from './screens/TryOnOutfitsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ModifyMeasurements" component={ModifyMeasurementsScreen} />
        <Stack.Screen name="TryOnOutfits" component={TryOnOutfitsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
