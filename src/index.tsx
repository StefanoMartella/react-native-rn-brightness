import { NativeModules } from 'react-native';

type RnBrightnessType = {
  getBrightness(): Promise<number>;
  setBrightness(brightnessLevel: number): void;
};

const { RnBrightness } = NativeModules;

export default RnBrightness as RnBrightnessType;
