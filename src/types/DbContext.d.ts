import React from "react";

export interface DbContextTypes {
    dbConnector: null|SQLiteDatabase
}


export interface DbContextPropsTypes{
    children: React.ReactNode
}