import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-ios-local-network-permission' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const IosLocalNetworkPermission = NativeModules.IosLocalNetworkPermission
  ? NativeModules.IosLocalNetworkPermission
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );


/**
 * 
 * check ios local network permission
 * */ 
export function checkIOSLocalNetworkPermission(): Promise<boolean> {
  if(Platform.OS === 'ios') {
    return  IosLocalNetworkPermission.check().then((res: string) => res === 'true')
  }
  return Promise.resolve(true)   
}

/**
 * 
 * request ios local network permission
 * */ 
export function requestIOSLocalNetworkPermission() {
  return checkIOSLocalNetworkPermission()
}

