package com.ioslocalnetworkpermission

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class IosLocalNetworkPermissionModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun check(promise: Promise) {
    promise.resolve("true")
  }

  companion object {
    const val NAME = "IosLocalNetworkPermission"
  }
}
