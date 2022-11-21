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
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    padding: 20,
    borderRadius: 20,
    margin: 20
  },
  text: {
    color: 'white',
    padding: 5,
    fontSize: 20
  }
});
