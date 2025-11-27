import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function GameCard({ game, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.meta}>{game.genre || '—'} • Nota: {game.rating ?? '—'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  title: { fontSize: 16, fontWeight: '600' },
  meta: { color: '#666', marginTop: 4 }
});
