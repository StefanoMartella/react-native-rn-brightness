package com.reactnativernbrightness;

import android.app.Activity;
import android.view.WindowManager;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import androidx.annotation.NonNull;

public class RnBrightnessModule extends ReactContextBaseJavaModule {

  public RnBrightnessModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @NonNull
  @Override
  public String getName() {
    return "RnBrightness";
  }

  @ReactMethod
  public void getBrightness(Promise promise) {
    WindowManager.LayoutParams layoutParams = getCurrentActivity().getWindow().getAttributes();
    promise.resolve(layoutParams.screenBrightness);
  }

  @ReactMethod
  public void setBrightness(final float brightnessLevel) {
    final Activity activity = getCurrentActivity();

    if (activity == null) {
      return;
    }

    activity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        WindowManager.LayoutParams layoutParams = activity.getWindow().getAttributes();
        layoutParams.screenBrightness = brightnessLevel;
        activity.getWindow().setAttributes(layoutParams);
      }
    });
  }

}
