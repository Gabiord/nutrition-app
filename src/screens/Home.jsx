import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import CardList from "../components/CardList";
import IconsAssets from "../assets/icons/IconsAssets";
import FilterModal from "../components/FilterModal";

const Home = () => {
  const [textInput, setTextInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState('');

  const onPressCategory = (prop) => {
    setCategory(prop)
    setModalVisible(false)
  }


  return (
    <View style={styles.container}>
      <FilterModal modalVisible={modalVisible} onPressCategory={onPressCategory} />
      <Text>Buscar Receta</Text>
      <View style={styles.searchBar}>
        <TextInput style={styles.TextInput}></TextInput>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.image} source={IconsAssets.filter} />
        </Pressable>
      </View>
      <CardList category={category}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{

  },
  TextInput: {
    width: 255,
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#D9D9D9",
    marginRight: 17,
  },
  image: {
    width: 40,
    height: 40,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
