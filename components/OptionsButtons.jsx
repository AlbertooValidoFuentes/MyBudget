import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useState } from 'react';
import DataInputIncome from './DataInputIncome'
import DataInputExpenditure from './DataInputExpenditure'

export default function OptionsButtons({ setTransaction, setBalance, balance }) {

  const [showModalIncome, setShowModalIncome] = useState(false);
  const [showModalExpediture, setShowModalExpediture] = useState(false);

  return (
    <View style={styles.optionsContainer}>
      <Pressable style={[styles.optionMargin, styles.buttonStyle]} onPress={() => setShowModalIncome(!showModalIncome)}>
        <Text style={styles.buttonTextStyle}>Ingreso</Text>
      </Pressable>
      <DataInputIncome showModal={showModalIncome} setShowModal={setShowModalIncome} setTransaction={setTransaction} setBalance={setBalance} balance={balance}/>
      <Pressable style={styles.buttonStyle} onPress={() => setShowModalExpediture(!showModalExpediture)}>
        <Text style={styles.buttonTextStyle}>Gasto</Text>
      </Pressable>
      <DataInputExpenditure showModal={showModalExpediture} setShowModal={setShowModalExpediture} setTransaction={setTransaction} setBalance={setBalance} balance={balance}/>
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
    backgroundColor: '#3498DB',
    padding: 15,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontsize: 18,
    fontWeight: 'bold'
  }
});