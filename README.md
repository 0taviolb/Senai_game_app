# Senai Game App (Expo + React Native)

App de exemplo para disciplina: App de games com navegação e persistência local (SQLite) usando Expo.

## Funcionalidades
- ✅ 4 telas funcionais: Home, Lista de Games, Detalhes do Game, Adicionar Game
- ✅ Persistência local com SQLite (expo-sqlite)
- ✅ Navegação entre telas com React Navigation
- ✅ CRUD básico (criar, ler, deletar jogos)

## Instalação e Setup

### 1. Instale dependências
```powershell
npm install
```

### 2. Método A: Testar com Expo Go (RECOMENDADO para desenvolvimento rápido)

**No Windows/PowerShell:**
```powershell
npm start
```

No console, você verá um QR code. Abra o app **Expo Go** no seu dispositivo Android:
1. Baixe "Expo Go" da Play Store (Google Play)
2. Abra o app Expo Go
3. Escaneie o QR code exibido no terminal
4. O app carregará em ~10 segundos

Este método **não exige JDK/Gradle** — é a forma mais rápida de testar!

### 3. Método B: Build Android Nativo (para produção/APK)

Se quiser gerar um APK para instalar sem Expo Go:

```powershell
npm run android
```

**Pré-requisitos:**
- Android Studio instalado com Android SDK
- Emulador Android (AVD) criado e rodando, OU
- Dispositivo Android conectado via USB (com Debug habilitado)
- JAVA_HOME configurado (apontando para o JDK ou JBR do Android Studio)

Se tiver erro de Gradle/Kotlin, use a abordagem Expo Go acima.

## Estrutura do Projeto

```
Programa_gaming/
├── App.js                    # Ponto de entrada + navegação
├── db.js                     # Helper SQLite (CRUD)
├── package.json              # Dependências
├── app.json                  # Config Expo
├── screens/                  # Telas do app
│   ├── HomeScreen.js         # Tela inicial
│   ├── GameListScreen.js     # Lista de jogos
│   ├── GameDetailScreen.js   # Detalhes + remover
│   └── AddGameScreen.js      # Adicionar game
├── components/               # Componentes reutilizáveis
│   └── GameCard.js           # Item da lista
└── android/                  # Código Android nativo (gerado)
```

## Funcionalidades do App

### Tela Home
- Boas-vindas
- Botões para navegar para "Lista de Games" e "Adicionar Game"

### Tela Lista de Games
- Exibe todos os jogos armazenados no SQLite
- Pull-to-refresh (arrastar para atualizar)
- Toque em um game para ver detalhes
- Botão flutuante para adicionar novo game

### Tela Detalhes
- Mostra: Título, Gênero, Nota (0-10), Descrição
- Botão para remover o game com confirmação

### Tela Adicionar Game
- Formulário com campos: Título (obrigatório), Gênero, Nota, Descrição
- Validação básica (título não pode ser vazio)
- Salva automaticamente no SQLite ao confirmar

## Testando o App

### Adicionar um Game
1. Na tela Home ou Lista, clique em "Adicionar Game"
2. Preencha os campos (mínimo: Título)
3. Clique "Salvar"
4. O game aparecerá na lista

### Ver Detalhes de um Game
1. Na tela Lista, toque em qualquer game
2. Veja Título, Gênero, Nota e Descrição
3. Clique "Remover" para deletar (com confirmação)

### Atualizar Lista
1. Na tela Lista, puxe a tela para baixo (Pull-to-Refresh)
2. A lista será recarregada do SQLite

## Próximos Passos / Melhorias Sugeridas

- [ ] Adicionar edição de games (Edit Screen)
- [ ] Validação melhorada de formulários
- [ ] Melhorar UI/UX (cores, ícones, animações)
- [ ] Sincronização com uma API remota
- [ ] Ordenação e filtros de games
- [ ] Imagem/ícone para cada game

## Troubleshooting

**Problema:** Expo Go não encontra o QR code?
- Verifique se seu dispositivo e PC estão na mesma rede Wi-Fi
- Tente clicar em "Use Tunnel" no terminal Expo para usar conexão via internet

**Problema:** Erro de Gradle ao rodar `npm run android`?
- Use Expo Go em vez disso (Método A acima)
- Ou configure JAVA_HOME e verifique versões do JDK/Gradle/AGP

**Problema:** SQLite não persiste dados?
- Limpe o app (Settings > Apps > Senai Game App > Clear Data) e tente de novo
- Verifique o console para erros de banco de dados

## Dependências Principais

- **expo**: Framework para desenvolvimento React Native
- **expo-sqlite**: Acesso a banco de dados SQLite local
- **@react-navigation/native**: Navegação entre telas
- **react-native-gesture-handler**: Suporte a gestos

## Licença
Projeto educacional para disciplina SENAI 2025
