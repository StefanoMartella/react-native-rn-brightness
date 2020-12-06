import { NativeModules } from 'react-native';

type RNBrightnessType = {
  getBrightness(): Promise<number>;
  setBrightness(brightnessLevel: number): void;
};

const { RNBrightness } = NativeModules;

export default RNBrightness as RNBrightnessType;
