import { NativeModules } from 'react-native';

type RnBrightnessType = {
  multiply(a: number, b: number): Promise<number>;
};

const { RnBrightness } = NativeModules;

export default RnBrightness as RnBrightnessType;
