import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addGame } from '../db';

export default function AddGameScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  function handleSave() {
    if (!title.trim()) {
      Alert.alert('Validação', 'O título é obrigatório');
      return;
    }

    const payload = { title: title.trim(), genre: genre.trim(), rating: rating ? parseInt(rating, 10) : null, description: description.trim() };
    addGame(payload, () => {
      navigation.navigate('GameList');
    }, (err) => {
      console.error('addGame error', err);
      Alert.alert('Erro', 'Não foi possível adicionar o game');
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Nome do jogo" />

      <Text style={styles.label}>Gênero</Text>
      <TextInput style={styles.input} value={genre} onChangeText={setGenre} placeholder="Ex: Ação, RPG" />

      <Text style={styles.label}>Nota (0-10)</Text>
      <TextInput style={styles.input} value={rating} onChangeText={setRating} placeholder="8" keyboardType="numeric" />

      <Text style={styles.label}>Descrição</Text>
      <TextInput style={[styles.input, { height: 100 }]} value={description} onChangeText={setDescription} placeholder="Breve descrição" multiline />

      <View style={styles.actions}>
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 14, marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, padding: 8, marginTop: 6 },
  actions: { marginTop: 20 }
});
