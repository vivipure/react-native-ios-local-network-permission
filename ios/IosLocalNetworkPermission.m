#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(IosLocalNetworkPermission, NSObject)

RCT_EXTERN_METHOD(check: (RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
