// import { dbCon } from './node-practice'

let mysql = require('mysql')
let bcrypt = require('bcrypt')

let dbCon =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

let sqlConnected = false
dbCon.connect(function(err) {
    if (err) throw err
    console.log("Connected to SQL")
    sqlConnected = true
    selectDb("nodeDb")
})

function createDb(dbName){
    dbCon.query("CREATE DATABASE " + dbName, function (err, result) {
        if (err) throw err
        console.log("Database " + dbName + " created")
    })
}

function selectDb(dbName){
    dbCon.query("USE " + dbName, (err,result)=>{
        if (err) createDb(dbName)
        else console.log("Using database " + dbName)
    })
}

// function selectTable(tbName){
//     dbCon.query("CREATE TABLE" + tbName)
// }

function createTable(tbName,argString){
    args = " " + argString || ""
    dbCon.query('CREATE TABLE ' + tbName + argString,(err,result) => {
        if (err) throw err
        console.log("Table " + tbName + " created")
    })
}

function savePassword(pswd){
    bcrypt.hash(pswd, 5, function( err, bcryptedPassword) {
        //! save to db
    });
}

function comparePasswords(givenPswd,dbPswd){
    bcrypt.compare(givenPswd, dbPswd, (err, isMatch) => {
        if (isMatch)
        {
            //!log in
        }else
        {
            //!user err
        }
    })
}