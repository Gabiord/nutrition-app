import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Home from "./src/screens/Home"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CONTENIDO DE PAGINA</Text>
      <Home/>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
  },
});

export default App;