import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ListItem({ id, tipo, cantidad, descripcion, fecha }) {
  return (
      <Pressable style={styles.itemContainer}>
        <Text style={styles.itemText}>Tipo: {tipo}</Text>
        <Text style={styles.itemText}>Cantidad: {cantidad}</Text>
        <Text style={styles.itemText}>Descripcion: {descripcion}</Text>
        <Text style={styles.itemText}>Fecha: {fecha}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#3498DB',
    padding: 20,
    width: '90%',
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#ECF0F1',
    borderWidth: 2
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'

  }
});
