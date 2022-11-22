import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';

import Balance from './components/Balance';
import DataInputExpediture from './components/DataInputExpenditure';
import DataInputIncome from './components/DataInputIncome';
import ListItem from './components/ListItem';
import OptionsButtons from './components/OptionsButtons';

export default function App() {

  const [balance, setBalance] = useState(0)
  const [transaction, setTransaction] = useState([
    {
      id: uuid.v4(),
      tipo: 'Ingreso',
      cantidad: 456,
      descripcion: 'Hola mundo',
      fecha: 'Hoy'

    },
    {
      id: uuid.v4(),
      tipo: 'Ingreso',
      cantidad: 457,
      descripcion: 'Hola mundo',
      fecha: 'Ayer'

    }
  ])


  return (
    <View style={styles.container}>
      <Balance balance={balance}/>
      <OptionsButtons/>

      <FlatList data={transaction} renderItem={(renderItem) => {
        const {id, tipo, cantidad, descripcion, fecha} = renderItem.item
        return(
          <ListItem id={id} tipo={tipo} cantidad={cantidad} descripcion={descripcion} fecha={fecha}/>

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
});
