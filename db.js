import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('games.db');

export function setupDatabase() {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        genre TEXT,
        rating INTEGER,
        description TEXT
      );`
    );
  });
}

export function getGames(success, error) {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM games ORDER BY id DESC;', [], (_, { rows }) => {
      success(rows._array);
    }, (_, err) => {
      error && error(err);
    });
  });
}

export function getGameById(id, success, error) {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM games WHERE id = ?;', [id], (_, { rows }) => {
      success(rows._array[0]);
    }, (_, err) => {
      error && error(err);
    });
  });
}

export function addGame({ title, genre, rating, description }, success, error) {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO games (title, genre, rating, description) VALUES (?, ?, ?, ?);',
      [title, genre, rating, description],
      (_, result) => success && success(result),
      (_, err) => { error && error(err); }
    );
  });
}

export function deleteGame(id, success, error) {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM games WHERE id = ?;', [id], (_, result) => success && success(result), (_, err) => { error && error(err); });
  });
}

export default db;
