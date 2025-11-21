import React from 'react'
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite'
import AppNavigation from '../navigation/BottomNavigator';


const database = () => {
  return (
    <SQLiteProvider databaseName='note.db' onInit = {migrateDbIfNeed}>
      <AppNavigation/>
    </SQLiteProvider>
  );
};

async function migrateDbIfNeed(db: SQLiteDatabase) {
    await db.runAsync('PRAGMA journal_mode = WAL;');
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, tittle TEXT NOT NULL, content TEXT);
    `);
}

export default database

