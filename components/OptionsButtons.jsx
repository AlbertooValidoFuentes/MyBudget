import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useState } from 'react';
import DataInputIncome from './DataInputIncome'
import DataInputExpenditure from './DataInputExpenditure'

import {colors} from '../themes/colors.js'


export default function OptionsButtons({ setTransaction, setBalance, balance, transaction }) {

  const [showModalIncome, setShowModalIncome] = useState(false);
  const [showModalExpediture, setShowModalExpediture] = useState(false);

  const deleteData = () => {
    setTransaction([])
    setBalance(0)
  }

  return (
    <View style={styles.optionsContainer}>
      <Pressable style={[styles.optionMargin, styles.buttonStyle]} onPress={() => setShowModalIncome(!showModalIncome)}>
        <Text style={styles.buttonTextStyle}>Ingreso</Text>
      </Pressable>
      <DataInputIncome showModal={showModalIncome} setShowModal={setShowModalIncome} setTransaction={setTransaction} setBalance={setBalance} balance={balance} transaction={transaction} />
      <Pressable style={[styles.optionMargin, styles.buttonStyle]} onPress={() => setShowModalExpediture(!showModalExpediture)}>
        <Text style={styles.buttonTextStyle}>Gasto</Text>
      </Pressable>
      <DataInputExpenditure showModal={showModalExpediture} setShowModal={setShowModalExpediture} setTransaction={setTransaction} setBalance={setBalance} balance={balance} transaction={transaction} />
      <Pressable style={styles.buttonStyle} onPress={() => deleteData()}>
        <Text style={styles.buttonTextStyle}>Borrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  optionMargin: {
    marginRight: 10,
  },
  buttonStyle: {
    backgroundColor: colors.blue,
    padding: 15,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10

  },
  buttonTextStyle: {
    color: colors.white,
    fontsize: 18,
    fontWeight: 'bold'
  }
});