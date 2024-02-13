import React from 'react';
import {StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import Home from "./src/screens/Home"

const App = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text style={styles.text}>CONTENIDO DE PAGINA</Text>
      <Home/>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
  },
});

export default App;