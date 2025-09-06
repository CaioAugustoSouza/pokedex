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
          <Text style={styles.btnText}>
            Buscar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center'
  },
  title: {
    width: width * 0.9,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10
  },
  display: {
    backgroundColor: 'yellow',
    width: 8 * width / 9,
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
    paddingVertical: 10,
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
    backgroundColor: 'green',
    borderRadius: 10
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
    backgroundColor: 'green',
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btn2: {
    backgroundColor: 'yellow',
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center'
  },
  btnText:{
    textAlign: 'center',
    color: 'black'
  },
  btnText1:{
    textAlign: 'center',
    color: 'black'
  }
});
