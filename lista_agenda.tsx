import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Pressable, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Agenda } from '../constants/Agenda';
import { Link } from 'expo-router';


const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'white',}}>

      <Text> Agenda </Text>
      <View >
        <Text>Id</Text>
        <Text>Nome </Text>
        <Text>horario</Text>
      </View>
      <FlatList
        data={Agenda()}
        keyExtractor={(item) => item.id_agenda.toString()}
        renderItem={({ item }) => (
          < View >
            <View>
              <Text >{item.id_agenda}</Text>
              <Text >{item.nome_profissional}</Text>
              <Text >{item.horario}</Text>
            </View>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

});
