import React from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home";
const App = () => {

  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});

export default App;
