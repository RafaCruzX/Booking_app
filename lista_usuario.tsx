import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Pressable, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Usuarios } from '@/constants/Usuario';
import { Link } from 'expo-router';


const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'white',}}>

      <Text> Perfil dos clientes </Text>
      <View >
        <Text>Id</Text>
        <Text>Nome </Text>
        <Text>Grupo</Text>
      </View>
      <FlatList style={{flex:1}}
        data={Usuarios()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          < View >
            <View>
              <Text >{item.id}</Text>
              <Text >{item.nome}</Text>
              <Text >{item.id_grupo}</Text>
            </View>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

});