import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function CadastroUsuario() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    celular: '',
    password: '',
    documento: '',
    id_grupo: 'cliente',
    cargo: 'cabeleiro',
    status: 'ativo',
    data_nascimento: new Date(),
    avatar: null,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);


  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        keyboardType="email-address"
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <Text>Celular</Text>
      <TextInput
        style={styles.input}
        value={form.celular}
        keyboardType="phone-pad"
        onChangeText={(text) => setForm({ ...form, celular: text })}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={form.password}
        secureTextEntry
        onChangeText={(text) => setForm({ ...form, password: text })}
      />

      <Text>Documento</Text>
      <TextInput
        style={styles.input}
        value={form.documento}
        keyboardType="numeric"
        onChangeText={(text) => setForm({ ...form, documento: text })}
      />



      <Text>Grupo</Text>
      <Picker
        selectedValue={form.id_grupo}
        onValueChange={(itemValue) => setForm({ ...form, id_grupo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Profissional" value="profissional" />
        <Picker.Item label="Cliente" value="cliente" />
        <Picker.Item label="Gerente" value="gerente" />
      </Picker>

      <Text>Cargo</Text>
      <Picker
        selectedValue={form.cargo}
        onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Cabeleireiro" value="cabeleiro" />
        <Picker.Item label="Manicure" value="manicure" />
        <Picker.Item label="Pedicure" value="pedicure" />
      </Picker>

      <Text>Status</Text>
      <Picker
        selectedValue={form.status}
        onValueChange={(itemValue) => setForm({ ...form, status: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Ativo" value="ativo" />
        <Picker.Item label="Inativo" value="inativo" />
      </Picker>


      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
};