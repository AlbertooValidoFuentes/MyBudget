import { StyleSheet, Text, View } from 'react-native';

export default function Balance() {
  return (
      <View style={styles.balanceContainer}>
        <Text style={styles.text}>Balance:</Text>
        <Text style={styles.text}>0€</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    padding: 5,
    fontSize: 20
  }
});
