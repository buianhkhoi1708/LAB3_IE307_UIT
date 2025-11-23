import { StyleSheet} from "react-native";
import React from "react";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import AppNavigator from "../navigation/AppNavigator";


const Database = () => {
	return (
		<SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded}>
			<AppNavigator/>
		</SQLiteProvider>
	);
};

async function migrateDbIfNeeded(db: SQLiteDatabase) {
	await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT);
    `);
}

export default Database;

