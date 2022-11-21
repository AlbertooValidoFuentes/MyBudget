import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Balance from './components/Balance';
import DataInput from './components/DataInputIncome';
import ListItem from './components/ListItem';
import OptionsButtons from './components/OptionsButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <Balance/>
      <OptionsButtons/>
      <ListItem/>
      <ListItem/>
      <DataInput/>
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
