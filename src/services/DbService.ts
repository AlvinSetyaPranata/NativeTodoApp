import SQLite from "react-native-sqlite-storage"


export const DBService = SQLite.openDatabase(
    {
        name: 'data',
        location: 'default'
    },
    () => "Successfully connected to database",
    () => "Error when connecting to database"
)

export function createTable(connector: SQLite.SQLiteDatabase) {
    connector.executeSql("CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, date VARCHAR, location VARCHAR)", [], (result) => {
        console.log("Table created successfully");
    }, (error) => {
        console.log("Create table error", error)
    })
}


export function addTodo(connector: SQLite.SQLiteDatabase, title: string|unknown, date: string|unknown, location: string|unknown) {
    let sql = `INSERT INTO todo (title, date, location) VALUES (?, ?, ?)`;
    connector.executeSql(sql, [title, date, location], (result) => {
        return "Success User created successfully."
    }, (error) => {
        return "Create user error";
    });
}


export function updateTodo(connector: SQLite.SQLiteDatabase, column: string, newValue: string) {
    let sql = `UPDATE todo SET ${column}=${newValue}`

    connector.executeSql(sql, [], ()=>{}, ()=>{})
}