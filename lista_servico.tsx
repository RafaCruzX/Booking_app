import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Pressable, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Servico } from '../constants/Servico';
import { Link } from 'expo-router';


const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'white',}}>

      <Text> Serviços </Text>
      <View >
        <Text>Id</Text>
        <Text>Nome </Text>
      </View>
      <FlatList
        data={Servico()}
        keyExtractor={(item) => item.id_servico.toString()}
        renderItem={({ item }) => (
          < View >
            <View>
              <Text >{item.id_servico}</Text>
              <Text >{item.nome_servico}</Text>
             
            </View>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

});