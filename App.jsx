import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Balance from './components/Balance';
import DataInputExpediture from './components/DataInputExpenditure';
import DataInputIncome from './components/DataInputIncome';
import ListItem from './components/ListItem';
import OptionsButtons from './components/OptionsButtons';

export default function App() {

  const [balance, setBalance] = useState(0)
  const [transaction, setTransaction] = useState([])

  console.log(transaction);
  
  return (
    <View style={styles.container}>
      <Balance balance={balance}/>
      <OptionsButtons setTransaction={setTransaction} transaction={transaction} setBalance={setBalance} balance={balance}/>

      <FlatList data={transaction}  style={styles.list} renderItem={(renderItem) => {
        const {tipo, cantidad, descripcion, fecha} = renderItem.item
        return(
          <ListItem tipo={tipo} cantidad={cantidad} descripcion={descripcion} fecha={fecha}/>
        )
      }}
      />
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
  list: {
    width: '90%'
  }
});
