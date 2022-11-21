import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Balance from './components/Balance';

export default function App() {
  return (
    <View style={styles.container}>
      <Balance/>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 20
  },
  balanceContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 20,
  }
});
