import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ListItem() {
  return (
      <Pressable style={styles.itemContainer}>
        <Text style={styles.itemText}>Tipo: Ingreso</Text>
        <Text style={styles.itemText}>Cantidad: 200€</Text>
        <Text style={styles.itemText}>Descripcion: Supermercado</Text>
        <Text style={styles.itemText}>Fecha: 20 de Marzo</Text>
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
  itemText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'

  }
});
