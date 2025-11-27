import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Senai Game App</Text>
      <Text style={styles.subtitle}>Gerencie seus jogos favoritos (localmente)</Text>

      <View style={styles.buttons}>
        <Button title="Ver Lista de Games" onPress={() => navigation.navigate('GameList')} />
      </View>

      <View style={styles.buttons}>
        <Button title="Adicionar Game" onPress={() => navigation.navigate('AddGame')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  buttons: { marginVertical: 8, width: '80%' }
});
