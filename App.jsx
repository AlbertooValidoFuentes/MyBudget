import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Balance from './components/Balance';
import DataInputExpediture from './components/DataInputExpenditure';
import DataInputIncome from './components/DataInputIncome';
import ListItem from './components/ListItem';
import OptionsButtons from './components/OptionsButtons';

export default function App() {

  const [balance, setBalance] = useState(0)
  const [transaction, setTransaction] = useState([])

  return (
    <View style={styles.container}>
      <Balance balance={balance}/>
      <OptionsButtons/>
      <ListItem/>
      <ListItem/>
      <DataInputIncome/>
      <DataInputExpediture/>
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
