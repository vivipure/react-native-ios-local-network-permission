import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { checkIOSLocalNetworkPermission } from 'react-native-ios-local-network-permission';

export default function App() {
  const [result, setResult] = React.useState<string>();

  React.useEffect(async () => {
   const res = await checkIOSLocalNetworkPermission()
   setResult(res ? 'Granted': 'denied')
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
