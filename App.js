import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  Modal
} from "react-native";

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
    setItemId(itemId + 1);
    const newItem = { id: itemId, nombre: textItem };
    setItemList((prevState) => [...prevState, newItem]);
    setTextItem("");
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
      <Button
        title="x"
        color="#E21010"
        accessibilityLabel="eliminar"
        onPress={() => selectItemToDelete(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text>Escribe la lista de Alimentos:</Text>
      </View>
      <View style={styles.addContainer}>
        <TextInput
          style={styles.addText}
          defaultValue=""
          onChangeText={onChangeTextHandler}
        />
        <Button title="Add" color="#4CAF50" onPress={addItemToList} />
      </View>
      <View style={styles.addContainer}>
        <FlatList data={itemList} renderItem={renderItemView} />
      </View>


      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Desea eliminar?</Text>
              <Button
                title="Cancelar"
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Button
              title="Eliminar"
              style={[styles.button, styles.buttonClose]}
              onPress={deleteItemFromList}
              />
            </View>
          </View>
        </Modal>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    height: 60,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
});
