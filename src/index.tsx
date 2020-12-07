import { NativeModules, Platform } from 'react-native';

type RNBrightnessType = {
  getBrightness(): Promise<number>;
  setBrightness(brightnessLevel: number): Promise<void>;
};

const { RNBrightness } = NativeModules;

export default {
  setBrightness(brightnessLevel: number): void {
    if (brightnessLevel < 0 || brightnessLevel > 1) {
      if (!(Platform.OS === 'android' && brightnessLevel === -1)) {
        throw Error('BrightnessLevel value must betweens 0 to 1');
      }
    }
    RNBrightness.setBrightness(brightnessLevel);
  },
  getBrightness: RNBrightness.getBrightness,
} as RNBrightnessType;
