import { StyleSheet, Text, View } from 'react-native';

export default function Balance() {
  return (
      <View style={styles.balanceContainer}>
        <Text>Balance:</Text>
        <Text>0€</Text>
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
  }
});
