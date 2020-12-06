import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RNBrightness from 'react-native-rn-brightness';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test on real device</Text>
      <Button
        title={'Max'}
        onPress={async () => {
          RNBrightness.setBrightness(1);
        }}
      />
      <Button
        title={'Third'}
        onPress={async () => {
          RNBrightness.setBrightness(0.3);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
