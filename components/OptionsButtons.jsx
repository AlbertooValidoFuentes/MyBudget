import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function OptionsButtons() {
  return (
      <View style={styles.optionsContainer}>
        <Pressable style={[styles.optionMargin, styles.buttonStyle]}>
          <Text style={styles.buttonTextStyle}>Ingreso</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Gasto</Text>
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