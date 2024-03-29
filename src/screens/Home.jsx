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
import IconsAssets from "../../assets/icons/IconsAssets";
import FilterModal from "../components/FilterModal";
import { colors } from "../global/colors";

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
      <Text>Buscar Recetas</Text>
      <View style={styles.searchBar}>
        <TextInput style={styles.TextInput} onChangeText={(value)=>setTextInput(value)} placeholder="Buscar por nombre"/>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.image} source={IconsAssets.filter} />
        </Pressable>
      </View>
      <CardList category={category} textInput={textInput}/>
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
    borderColor: colors.gray4,
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
