import { StyleSheet, Text, View } from 'react-native';

export default function OptionsButtons() {
  return (
      <View style={styles.optionsContainer}>
        <Text>Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    padding: 20,
    borderRadius: 20,
    margin: 20
  },
});