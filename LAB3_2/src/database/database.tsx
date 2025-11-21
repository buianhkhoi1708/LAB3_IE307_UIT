import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite'


const database = () => {
  return (
    <SQLiteProvider databaseName='note.db' onInit = {migrateDbIfNeed}>

    </SQLiteProvider>
  );
};

async function migrateDbIfNeed(db: SQLiteDatabase) {
    await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE IF NOT EXISTS notes (id INTERGER PRIMARY KEY AUTOINCREMENT, tittle TEXT NOT NULL, content TEXT);
    `);
}

export default database

