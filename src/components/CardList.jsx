import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const CardList = () => {
  const dataRecetas = [
    {
      name: "Arroz con pollo",
      chef: "Maria Sanchez",
      rate: "4",
      image: {
        uri: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/LDRLW34JWNAPHDQ6I7KOOUJVKI.jpg",
      },
    },
    {
      name: "Lomo saltado",
      chef: "Carlos Gomez",
      rate: "5",
      image: {
        uri: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HP647TGBTUI6ZGYKHCUYHIXNZM.jpg",
      },
    },
    {
      name: "Tallarines verdes",
      chef: "Luisa Torres",
      rate: "3",
      image: {
        uri: "https://i.pinimg.com/736x/91/e1/29/91e12992932aa18e165acd7aa0e99e75.jpg",
      },
    },
    {
      name: "Seco de cordero",
      chef: "Pedro Rodriguez",
      rate: "4",
      image: {
        uri: "https://www.comedera.com/wp-content/uploads/2021/07/seco-de-cordero.jpg",
      },
    },
    {
      name: "Ceviche de pescado",
      chef: "Ana Ramirez",
      rate: "5",
      image: {
        uri: "https://messinthekitchen.com/wp-content/uploads/2021/06/ceviche-de-pescado-2.jpg",
      },
    },
    {
      name: "Milanesa de pollo",
      chef: "Sofia Lopez",
      rate: "4",
      image: {
        uri: "https://wildfork.mx/cdn/shop/articles/03_Milanesa_de_Pollo_con_Papas_Fritas.jpg?v=1614571982",
      },
    },
    {
      name: "Sopa de lentejas",
      chef: "Juan Perez",
      rate: "3",
      image: {
        uri: "https://www.justspices.es/media/recipe/sopa-de-lentejas.jpg",
      },
    },
    {
      name: "Papa a la huancaina",
      chef: "Elena Castro",
      rate: "5",
      image: {
        uri: "https://cdn.colombia.com/gastronomia/2013/05/17/papas-a-la-huancaina-3387.jpg",
      },
    },
    {
      name: "Tacos al pastor",
      chef: "Miguel Hernandez",
      rate: "4",
      image: {
        uri: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg",
      },
    },
    {
      name: "Lasagna de carne",
      chef: "Laura Martinez",
      rate: "5",
      image: {
        uri: "https://www.recetasdesbieta.com/wp-content/uploads/2018/10/lasagna-original..jpg",
      },
    },
  ];
  const numColumns = 2;

  
  return (
    <>
      <Text>Resultados</Text>
      <Text>10 Recetas</Text>
      <View style={styles.container}>
        <FlatList
          data={dataRecetas}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
  },
});
