import { Text, View, StyleSheet, Button, Modal, Pressable } from "react-native";

const CustomModal = (
    {animationTypeProp,
    isVisibleProp,
    onDeleteItemHandler, 
    setModalVisibleEvent
    }) => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType= {animationTypeProp}
          visible={isVisibleProp}
          onRequestClose={() => {
            setModalVisibleEvent(!isVisibleProp);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Desea eliminar?</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisibleEvent(!isVisibleProp)}
              >
                  <Text>Cancelar</Text>
               </Pressable> 
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onDeleteItemHandler}
              >
                <Text>Eliminar</Text>
              </Pressable>

            </View>
          </View>
        </Modal>
      </View>
    );
  }

const styles = StyleSheet.create({
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
  

  export default CustomModal;