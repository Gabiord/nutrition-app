import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'

const Home = () => {
  return (
    <View>
      <Text>Buscar Receta</Text>
      <TextInput style={styles.TextInput}></TextInput>
      <CardList/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  TextInput:{
    width:"70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15
  }
})