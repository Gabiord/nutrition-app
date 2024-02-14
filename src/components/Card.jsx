import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Card = ({ item }) => {
  return (
    <ImageBackground
      source={item.image}
      resizeMode="cover"
      style={styles.container}
    >
      <View>
        <Text>*</Text>
        <Text>{item.rate}</Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.chef}>By {item.chef}</Text>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: 150,
    height: 150,
    margin: 20,
  },
  name: {
    color: colors.white,
  },
  chef: {
    color: colors.gray3,
    fontFamily: "Bold"

  },
});
