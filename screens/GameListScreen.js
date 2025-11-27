import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, RefreshControl } from 'react-native';
import { getGames, setupDatabase } from '../db';
import GameCard from '../components/GameCard';

export default function GameListScreen({ navigation }) {
  const [games, setGames] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function loadGames() {
    getGames((rows) => {
      setGames(rows);
    }, (err) => {
      console.error('DB getGames error', err);
    });
  }

  useEffect(() => {
    setupDatabase();
    const unsub = navigation.addListener('focus', () => {
      loadGames();
    });
    loadGames();
    return unsub;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jogos</Text>
        <Button title="Adicionar" onPress={() => navigation.navigate('AddGame')} />
      </View>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GameCard
            game={item}
            onPress={() => navigation.navigate('GameDetail', { id: item.id })}
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); loadGames(); setRefreshing(false); }} />}
        ListEmptyComponent={() => (
          <View style={styles.empty}><Text>Nenhum game cadastrado ainda.</Text></View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  title: { fontSize: 20, fontWeight: 'bold' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  empty: { padding: 20, alignItems: 'center' }
});
