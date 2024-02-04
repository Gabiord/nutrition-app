import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Pressable
} from "react-native";
import CustomModal from "./src/components/CustomModal";


export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemId, setItemId] = useState(1);
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextItem(text);
  };

  const addItemToList = () => {
    if(textItem){
      setItemId(itemId + 1);
      const newItem = { id: itemId, nombre: textItem };
      setItemList((prevState) => [...prevState, newItem]);
      setTextItem("")
    }
  };

  const selectItemToDelete = (id) => {
    setModalVisible(!modalVisible)
    setItemSelected(itemList.find((item) => item.id === id))
  }

  const deleteItemFromList = () => {
    const newList = itemList.filter((item)=> item.id !== itemSelected.id)
    console.log(newList)
    setItemList(newList)
    setModalVisible(!modalVisible)
  }

  const renderItemView = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.nombre}</Text>
      <Pressable style={styles.buttonX}
        onPress={() => selectItemToDelete(item.id)}>
          <Text style={styles.buttonXText}>X</Text> 
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}> 

      <View style={styles.tituloContainer}>
        <Text>Hola Gabriela</Text>
        <Text>Que comemos hoy?</Text>
      </View>

      <View style={styles.addContainer}>
        <TextInput
          style={styles.addText}
          value={textItem}
          onChangeText={onChangeTextHandler}
        />
        <Pressable style={styles.buttonAdd} onPress={addItemToList}>
          <Text style={styles.buttonAddText}>ADD</Text>
        </Pressable>
      </View>
      <View style={styles.addContainer}>
        <FlatList data={itemList} renderItem={renderItemView} />
      </View>

      <CustomModal
        animationTypeProp = "slide"
        isVisibleProp = {modalVisible}
        onDeleteItemHandler = {deleteItemFromList}
        setModalVisibleEvent = {setModalVisible}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    paddingTop: 30,
  },
  addContainer: {
    width: 300,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  addText: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
  tituloContainer: {
    height: 52,
    width: 195, 
    marginTop:6,
  },

  listContainer: {
    width: 300,
    height: 30,
    flexDirection: "row",
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonAdd:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
  buttonAddText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonX:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  buttonXText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
}
});
