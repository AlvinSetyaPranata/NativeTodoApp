import { useContext, createContext } from "react";
import { SQLiteDatabase } from "react-native-sqlite-storage";
import { DBService } from "../services/DbService";
import { DbContextTypes, DbContextPropsTypes } from "../types/DbContext"; 


export const DbContext = createContext<DbContextTypes>({dbConnector: null})

export function DbProvider({children}: DbContextPropsTypes) {
    return (
        <DbContext.Provider value={{dbConnector: DBService}}>
            {children}
        </DbContext.Provider>
    )
}