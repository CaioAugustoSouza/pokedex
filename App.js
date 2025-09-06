import { SharedObjectType } from "expo";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [filterList, setFilterList] = useState([])
  const [image, setImage] = useState()
  const [tipo, setTipo] = useState()
  const [nome, setNome] = useState()

  function obterPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
      .then(r => r.json())
      .then(r => {
        setPokemonList(r.results.map(response => response))
      })
      .catch(error => {
        console.error('Erro ao obter Pokémon:', error);
        setPokemonList([])
      });
  }

  function buscar() {
    console.log(busca)
    console.log(pokemonList)
    if (busca && busca != '') {
      setFilterList(
        pokemonList.filter(
          item => item.name.toLowerCase().includes(busca.toLowerCase())
        ))
      console.log(pokemonList.filter(
        item => item.name.toLowerCase().includes(busca.toLowerCase())
      ))
    }
  }

  function verDetalhes(url) {
    fetch(url).then(r => r.json()).then(r => {
      console.log(r.sprites.other["official-artwork"].front_default)
      setImage(r.sprites.other["official-artwork"].front_default)
      console.log(r.types[0].type.name)
      setTipo(r.types[0].type.name)
      console.log(r.name)
      setNome(r.name)
      fetch(r.types[0].type.url).then(r => r.json()).then(r => {
        console.log(r.sprites['generation-iii'].colosseum.name_icon)
        setTipo(r.sprites['generation-iii'].colosseum.name_icon)
      })
    })
  }

  function Limpar() {
    setFilterList([])
    setBusca()
    setImage()
    setTipo()
    setNome()
  }

  const [busca, setBusca] = useState()

  useEffect(() => {
    obterPokemon();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Pokedex
        </Text>
      </View>
      <View style={{ margin: 5, backgroundColor: 'white', padding: 6, borderRadius: 4 }}><Text style={{ fontSize: 30 }}>{nome ? nome : ''}</Text></View>
      <View style={styles.display}>
        {image ?
          <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="contain"
          />
          :
          <></>
        }

      </View>
      {tipo ?
        <Image
          style={{ width: 100, height: 30, marginBottom: 30, marginTop: 5 }}
          source={{ uri: tipo }}
          resizeMode="contain"
        />

        : <></>
      }
      <View style={styles.namesBox}>
        <ScrollView showsVerticalScrollIndicator={true}>

          {
            filterList.length > 0 ? filterList.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.text} onPress={() => { verDetalhes(item.url) }}>
                  {item.name}
                </Text>
              </View>
            ))

              :
              (pokemonList.length > 0 ? pokemonList.map((item, index) => (
                <View key={index} style={styles.item}>
                  <Text style={styles.text} onPress={() => { verDetalhes(item.url) }}>
                    {item.name}
                  </Text>
                </View>
              )) : <></>
              )

          }
        </ScrollView>
      </View>
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder="Buscar pokemon"
          value={busca}
          onChangeText={(val) => setBusca(val)} // <<< aqui pega só o texto
          style={styles.inputText}
        />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btn1} onPress={buscar}>
          <Text style={styles.btnText}>
            Buscar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText2} onPress={Limpar}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.8,
    height: height * 0.8,
    marginTop: 0
  },
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
    backgroundColor: 'white',
    width: 8 * width / 9,
    height: 400,
    borderRadius: 40,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
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
    marginTop: 30,
    width: width / 2,
  },
  inputText: {
    backgroundColor: 'white',
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
  btnText: {
    textAlign: 'center',
    color: 'white'
  },
  btnText2: {
    textAlign: 'center',
    color: 'black'
  }
});
