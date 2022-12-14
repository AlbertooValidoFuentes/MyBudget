import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Balance from './components/Balance';
import ListItem from './components/ListItem';
import OptionsButtons from './components/OptionsButtons';
import {colors} from './themes/colors.js'

export default function App() {

  const [balance, setBalance] = useState(0)
  const [transaction, setTransaction] = useState([])

  return (
    <View style={styles.container}>
      <Balance balance={balance} />
      <OptionsButtons setTransaction={setTransaction} transaction={transaction} setBalance={setBalance} balance={balance} />

      <FlatList data={transaction} style={styles.list} renderItem={(renderItem) => {
        const { id, tipo, cantidad, descripcion, fecha } = renderItem.item
        return (
          <ListItem
            tipo={tipo}
            cantidad={cantidad}
            descripcion={descripcion}
            fecha={fecha} id={id}
            setTransaction={setTransaction}
            transaction={transaction}
            balance={balance}
            setBalance={setBalance} />
        )
      }}
      />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgoundColor,
    alignItems: 'center',
  },
  list: {
    width: '90%'
  }
});
