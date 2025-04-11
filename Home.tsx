
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ setPage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Button title="Ir para Agenda" onPress={() => setPage('agenda')} />
      <Button title="Ir para Serviços" onPress={() => setPage('servico')} />
      <Button title="Ir para Usuário" onPress={() => setPage('usuario')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
