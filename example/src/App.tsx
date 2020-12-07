import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RNBrightness from 'react-native-rn-brightness';

export default function App() {
  const [result, setResult] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>Test on real device</Text>
      <Text>{result}</Text>
      <Button
        title={'Max'}
        onPress={async () => {
          await RNBrightness.setBrightness(1);
          // @ts-ignore
          setResult(await RNBrightness.getBrightness());
        }}
      />
      <Button
        title={'Third'}
        onPress={async () => {
          await RNBrightness.setBrightness(0.3);
          // @ts-ignore
          setResult(await RNBrightness.getBrightness());
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
