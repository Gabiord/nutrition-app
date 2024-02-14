import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import recetas from '../data/recetas.json'

const CardList = (category) => {

  const numColumns = 2;
  const filteredData = category.category
    ? recetas.filter((receta) => receta.category === category.category)
    : recetas;
  const quantity = filteredData.length  

  return (
    <>
      <Text>Resultados</Text>
      <Text>{quantity} Recetas</Text>
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          numColumns={numColumns}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {},
});
