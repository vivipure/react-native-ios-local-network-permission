@objc(IosLocalNetworkPermission)
class IosLocalNetworkPermission: NSObject {

  @objc
  func check(_ resolve: @escaping RCTPromiseResolveBlock,reject: @escaping RCTPromiseRejectBlock) -> Void {
   self.checkLanAccess{isGranted in 
    if(isGranted) {
      resolve("true")
    } else {
      resolve("false")
    }
   }
  }

  func checkLanAccess(_ completed: Optional<(Bool) -> Void> = .none) {
    DispatchQueue.global(qos: .userInitiated).async {
      let hostName = Process.processInfo.hostName
      let isGranted = hostName.contains(".local")
      if let completed {
        DispatchQueue.main.async {
          completed(isGranted)
        }
      }
    }
  }
}
