import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  const items = [
    "Banana",
    "Maçã super gigante que não cabe",
    "Pera",
    "Uva",
    "Laranja",
    "Abacaxi",
    "Manga muito grande também",
    "Melancia",
    "Morango",
    "Kiwi",
    "Cereja",
    "Goiaba",
    "Pitaya",
  ];
  const [busca, setBusca] = useState()

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Pokedex
        </Text>
      </View>
      <View style={styles.display}>
        <Image

        />
      </View>
      <View style={styles.namesBox}>
        <ScrollView showsVerticalScrollIndicator={true}>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.text}>
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder='digite aqui'
          value={busca}
          onChange={(val) => { setBusca(val) }}
          style={styles.inputText}
        />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btn1} >
          <Text>
            Buscar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText:{
    textAlign: 'center'
  },
  title: {
    width: width*0.9,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center'
  },  
  display: {
    backgroundColor: 'yellow',
    width: 8*width/9,
    height: 400,
    marginBottom: 30,
    borderRadius: 40
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red'
  },
  namesBox: {
    width: 2 * width / 3,
    height: 100,
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: 'black'

  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
  inputTextContainer: {
    backgroundColor: 'blue',
    marginTop: 30,
    width: width / 2,
  },
  inputText: {
    backgroundColor: 'green'
  },
  containerButtons: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30
  },  
  btn1: {
    backgroundColor: 'white',
    width: 100,
    height: 40,
  },
  btn2: {
    backgroundColor: 'white',
    width: 100,
    height: 40,
  }
});
