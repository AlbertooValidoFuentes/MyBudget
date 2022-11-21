import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Balance from './components/Balance';
import ListItem from './components/ListItem';
import OptionsButtons from './components/OptionsButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <Balance/>
      <OptionsButtons/>
      <ListItem/>
      <ListItem/>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
  },
});
