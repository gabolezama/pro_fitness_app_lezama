import { openDatabase } from "expo-sqlite"

const db = openDatabase('PRO_FITNESS_APP.db')

export const init = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS user_info (
                    id INTEGER PRIMARY KEY NOT NULL,
                    altura TEXT NOT NULL,
                    peso TEXT NOT NULL,
                    biceps TEXT,
                    hombros TEXT,
                    abdominales TEXT,
                    gluteos TEXT,
                    muslo TEXT,
                    pantorrilla TEXT,
                    genero TEXT,
                    training_level TEXT
                    )`,
                [],
                (result)=>{ resolve() },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}

export const initSouvenirs = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS souvenirs (
                    id INTEGER PRIMARY KEY NOT NULL,
                    picture TEXT,
                    location TEXT
                    )`,
                [],
                (result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}

export const insertUserInfo = (data) =>{
    console.log(data);
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `INSERT INTO user_info (
                    altura,
                    peso,
                    biceps,
                    hombros,
                    abdominales,
                    gluteos,
                    muslo,
                    pantorrilla,
                    genero,
                    training_level)
                    VALUES(?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.Altura,
                    data.Peso,
                    data.Biceps,
                    data.Hombros,
                    data.Abdominales,
                    data.Gluteos,
                    data.Muslo,
                    data.Pantorrilla,
                    data.Genero,
                    data["Training Level"]
                ],
                (_, result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}

export const writeSouvenirs = (picture, location) =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `INSERT INTO souvenirs (
                    picture,
                    location)
                    VALUES(?,?)`,
                [
                    picture,
                    location
                ],
                (_, result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}

export const getSouvenirInfo = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `SELECT * FROM souvenirs`,
                [],
                (_, result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}

export const getUserInfo = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `SELECT * FROM user_info`,
                [],
                (_, result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}

export const deleteAllInfo = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `DELETE FROM user_info`,
                [],
                (_, result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}
export const deleteSouvenirs = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                `DELETE FROM souvenirs`,
                [],
                (_, result)=>{ resolve(result) },
                (_, error)=>{ reject(error) },
            )
        })
    })
    return promise;
}