import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Balance from './components/Balance';
import OptionsButtons from './components/optionsButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <Balance/>
      <OptionsButtons/>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
  },
});
