var sqlite3 = require('sqlite3').verbose();
const DBNAME = "db.sqlite3";
var database = new sqlite3.Database(DBNAME, (err) => {
    if(err){
        //error opening database
        console.log(err.message);
        throw err;
    }else {
        console.log("Connected to database");
    }
});

module.exports = database;