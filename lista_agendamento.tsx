import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Pressable, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Agendamentos } from '../constants/Agendamento';
import { Link } from 'expo-router';


const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'white',}}>

      <Text> Agendamento </Text>
      <View >
        <Text>Id Agendamento</Text>
        <Text>data </Text>
        <Text>hora</Text>
        <Text>nome cliente</Text>
        <Text>nome profissional</Text>
      </View>
      <FlatList
        data={Agendamentos()}
        keyExtractor={(item) => item.id_agendamento.toString()}
        renderItem={({ item }) => (
          < View >
            <View>
              <Text >{item.id_agendamento}</Text>
              <Text >{item.data}</Text>
              <Text >{item.hora}</Text>
              <Text >{item.nome_profissional}</Text>
            </View>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

});
