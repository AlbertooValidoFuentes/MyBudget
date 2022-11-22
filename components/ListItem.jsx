import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function ListItem({ tipo, cantidad, descripcion, fecha, id, setTransaction, transaction }) {

  const removeProductHandler = () => {
    
    setTransaction(() => transaction.filter((transaction) => transaction.id !== id))
  }

  return (
    <Pressable style={styles.itemContainer}>
      <Text style={styles.itemText}>Tipo: {tipo}.</Text>
      <Text style={styles.itemText}>Cantidad: {cantidad}€</Text>
      <Text style={styles.itemText}>Descripcion: {descripcion}.</Text>
      <Text style={styles.itemText}>Fecha: {fecha}</Text>

      <View style={styles.itemOptions}>
        <Pressable onPress={removeProductHandler}>
          <Image source={require('../assets/eliminar.png')} style={styles.optionsImage} />
        </Pressable>
        <Pressable>
          <Image source={require('../assets/lapiz.png')} style={styles.optionsImage} />
        </Pressable>
      </View >
    </Pressable>


  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#3498DB',
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#ECF0F1',
    borderWidth: 2
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'

  },
  itemOptions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  optionsImage: {
    width: 25,
    height: 25,
    margin: 5
  }
});
