import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput } from "react-native";

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

  return (
    <View style={styles.container}>
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
        <TextInput
          placeholder='digite aqui'
          value={'texto'}
          onChange={()=>{}}
          style = {styles.text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: 'white'
  },
});
