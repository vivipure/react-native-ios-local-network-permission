# react-native-ios-local-network-permission

iOS local network permission request

## Installation

```sh
npm install react-native-ios-local-network-permission
```

## Usage

```js
import { checkIOSLocalNetworkPermission,  requestIOSLocalNetworkPermission} from 'react-native-ios-local-network-permission';

// check permission
const result = await checkIOSLocalNetworkPermission(); // true or false

// request permission
const isGranted = await requestIOSLocalNetworkPermission() // true or false
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
