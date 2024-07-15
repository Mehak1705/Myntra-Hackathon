import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fashion Fit</Text>
      <Button
        title="Modify Measurements"
        onPress={() => navigation.navigate('ModifyMeasurements')}
      />
      <Button
        title="Try On Outfits"
        onPress={() => navigation.navigate('TryOnOutfits')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
