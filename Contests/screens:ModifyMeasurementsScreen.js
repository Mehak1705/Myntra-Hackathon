import React, { useState } from 'react';
import { View, Text, Slider, Button, StyleSheet } from 'react-native';

export default function ModifyMeasurementsScreen({ navigation }) {
  const [height, setHeight] = useState(170);
  const [chest, setChest] = useState(90);
  const [waist, setWaist] = useState(80);
  const [hips, setHips] = useState(90);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modify Measurements</Text>
      <Text>Height: {height} cm</Text>
      <Slider
        style={styles.slider}
        minimumValue={150}
        maximumValue={200}
        value={height}
        onValueChange={value => setHeight(value)}
      />
      <Text>Chest: {chest} cm</Text>
      <Slider
        style={styles.slider}
        minimumValue={70}
        maximumValue={120}
        value={chest}
        onValueChange={value => setChest(value)}
      />
      <Text>Waist: {waist} cm</Text>
      <Slider
        style={styles.slider}
        minimumValue={60}
        maximumValue={100}
        value={waist}
        onValueChange={value => setWaist(value)}
      />
      <Text>Hips: {hips} cm</Text>
      <Slider
        style={styles.slider}
        minimumValue={70}
        maximumValue={120}
        value={hips}
        onValueChange={value => setHips(value)}
      />
      <Button
        title="Save & Apply"
        onPress={() => navigation.navigate('TryOnOutfits')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    marginVertical: 10,
  },
});
