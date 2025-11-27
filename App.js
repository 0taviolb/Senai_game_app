import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import GameListScreen from './screens/GameListScreen';
import GameDetailScreen from './screens/GameDetailScreen';
import AddGameScreen from './screens/AddGameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Senai Games' }} />
          <Stack.Screen name="GameList" component={GameListScreen} options={{ title: 'Lista de Games' }} />
          <Stack.Screen name="AddGame" component={AddGameScreen} options={{ title: 'Adicionar Game' }} />
          <Stack.Screen name="GameDetail" component={GameDetailScreen} options={{ title: 'Detalhes' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
