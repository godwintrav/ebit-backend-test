//import database connection
var database = require("../database/database.js");
// database table name
const tableName = 'market_price';

//function that converts timestamp to YYYY-MM-DD Format
const convertTimestamp = (unixTimestamp) => {
    var timestampMilliseconds = unixTimestamp * 1000;
    var date = new Date(timestampMilliseconds);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1 )).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var convertedDate = year + "-" + month + "-" + day;
    return convertedDate;
}

//function to fetch most recent ETH/USD Price
module.exports.fetchRecentETHUSDPrice = async (req, res) => {
    const pair = "ETH/USD";
    const columnName = 'vwap';
    var sqlQuery = `SELECT ${columnName} FROM ${tableName} WHERE pair = ? ORDER BY startTime DESC LIMIT 0, 1`;
    var parameters = [pair];
    database.all(sqlQuery, parameters, (err, row) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        let data = row[0];
        res.json({pair, "vwap": data[columnName]});
    });

}

//function to fetch most recent ETH/GBP Price
module.exports.fetchRecentETHGBPPrice = async (req, res) => {
    const pair = "ETH/GBP";
    const columnName = 'vwap';
    var sqlQuery = `SELECT ${columnName} FROM ${tableName} WHERE pair = ? ORDER BY startTime DESC LIMIT 0, 1`;
    var parameters = [pair];
    database.all(sqlQuery, parameters, (err, row) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        let data = row[0];
        res.json({pair, "vwap": data[columnName]});
    });

}

//function to return the high and low prices for ETH/USD for each day
module.exports.fetchHighAndLowPricesETHUSD = async(req, res) => {
    const pair = "ETH/USD";
    var sqlQuery = `SELECT * FROM ${tableName} WHERE pair = ? ORDER BY endTime ASC`;
    var parameters = [pair];
    let dataArray = [];
    database.all(sqlQuery, parameters, (err, rows) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }

       
        
        for(i = 0; i < rows.length; i++){
            if(i == 0){
                let data = [rows[i]["pair"], convertTimestamp(rows[i]["endTime"]), rows[i]["high"], rows[i]["low"]];
                dataArray.push(data);
            }
            
            var currentDataDate  = dataArray[dataArray.length - 1][1];
            var nextDataDate = convertTimestamp(rows[i]["endTime"]);
            if(currentDataDate === nextDataDate){
                if(rows[i]["high"] > dataArray[dataArray.length - 1][2]){
                    dataArray[dataArray.length - 1][2] = rows[i]["high"];
                }

                if(rows[i]["low"] < dataArray[dataArray.length - 1][3]){
                    dataArray[dataArray.length - 1][3] = rows[i]["low"];
                }
            }else {
                let data = [rows[i]["pair"], convertTimestamp(rows[i]["endTime"]), rows[i]["high"], rows[i]["low"]];
                dataArray.push(data);
            }
        }
        res.json(dataArray);
    });
}

//function to return the high and low prices for ETH/GBP for each day
module.exports.fetchHighAndLowPricesETHGBP = async(req, res) => {
    const pair = "ETH/GBP";
    var sqlQuery = `SELECT * FROM ${tableName} WHERE pair = ? ORDER BY endTime ASC`;
    var parameters = [pair];
    let dataArray = [];
    database.all(sqlQuery, parameters, (err, rows) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }

       
        
        for(i = 0; i < rows.length; i++){
            if(i == 0){
                let data = [rows[i]["pair"], convertTimestamp(rows[i]["endTime"]), rows[i]["high"], rows[i]["low"]];
                dataArray.push(data);
            }
            
            var currentDataDate  = dataArray[dataArray.length - 1][1];
            var nextDataDate = convertTimestamp(rows[i]["endTime"]);
            if(currentDataDate === nextDataDate){
                if(rows[i]["high"] > dataArray[dataArray.length - 1][2]){
                    dataArray[dataArray.length - 1][2] = rows[i]["high"];
                }

                if(rows[i]["low"] < dataArray[dataArray.length - 1][3]){
                    dataArray[dataArray.length - 1][3] = rows[i]["low"];
                }
            }else {
                let data = [rows[i]["pair"], convertTimestamp(rows[i]["endTime"]), rows[i]["high"], rows[i]["low"]];
                dataArray.push(data);
            }
        }
        res.json(dataArray);
    });
}    
