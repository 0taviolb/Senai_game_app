Nome do aplicativo Senai Game App

Tema escolhido Aplicativo móvel para gerenciamento e listagem pessoal de jogos (catálogo de games), focado em persistência de dados local.

Descrição do funcionamento O aplicativo permite que o usuário adicione, visualize e remova jogos de um catálogo pessoal. Possui 4 telas principais: Home (navegação inicial), Lista de Games (exibição de todos os jogos com pull-to-refresh), Detalhes do Game (visualização das informações e remoção) e Adicionar Game (formulário para criação de novos registros com validação básica).

Tecnologias utilizadas (SQLite ou API, bibliotecas adicionais, etc.)

Framework/Plataforma: Expo, React Native

Persistência de Dados: SQLite (usando a biblioteca expo-sqlite para armazenamento local)

Navegação: React Navigation (@react-navigation/native)

Adicionais: react-native-gesture-handler (suporte a gestos). O app não utiliza uma API remota, focando apenas na persistência local.
