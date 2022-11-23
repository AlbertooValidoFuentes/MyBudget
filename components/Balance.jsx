import { StyleSheet, Text, View } from 'react-native';

import {colors} from '../themes/colors.js'

export default function Balance({ balance }) {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.text}>Balance:</Text>
      {
        balance < 0 ?
          <Text style={styles.textRed}>{balance} €</Text>
          :
          <Text style={styles.text}>{balance} €</Text>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: colors.blue,
    padding: 20,
    borderRadius: 20,
    margin: 20
  },
  text: {
    color: colors.white,
    padding: 5,
    fontSize: 20
  },
  textRed: {
    color: colors.red,
    padding: 5,
    fontSize: 20
  }
});
