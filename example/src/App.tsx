import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RnBrightness from 'react-native-rn-brightness';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  return (
    <View style={styles.container}>
      <Text>Test on real device</Text>
      <Text>Result: {result?.toFixed(2)}</Text>
      <Button
        title={'Max'}
        onPress={async () => {
          RnBrightness.setBrightness(1);
          setResult(await RnBrightness.getBrightness());
        }}
      />
      <Button
        title={'Third'}
        onPress={async () => {
          RnBrightness.setBrightness(0.3);
          setResult(await RnBrightness.getBrightness());
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
