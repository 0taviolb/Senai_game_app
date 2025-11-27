import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { getGameById, deleteGame } from '../db';

export default function GameDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    getGameById(id, (g) => setGame(g), (err) => console.error(err));
  }, [id]);

  if (!game) return (
    <View style={styles.container}><Text>Carregando...</Text></View>
  );

  function handleDelete() {
    Alert.alert('Confirmação', 'Deseja remover este game?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Remover', style: 'destructive', onPress: () => {
        deleteGame(id, () => navigation.navigate('GameList'), (err) => console.error(err));
      } }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.meta}>Gênero: {game.genre || '—'}</Text>
      <Text style={styles.meta}>Nota: {game.rating ?? '—'}</Text>
      <Text style={styles.desc}>{game.description || 'Sem descrição'}</Text>

      <View style={styles.actions}>
        <Button title="Remover" color="#c00" onPress={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  meta: { fontSize: 14, color: '#444', marginBottom: 6 },
  desc: { marginTop: 12, fontSize: 16 },
  actions: { marginTop: 20 }
});
