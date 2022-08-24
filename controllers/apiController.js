var database = require("../database/database.js");

module.exports.fetchRecentETHUSDPrice = async (req, res) => {
    var sqlQuery = "SELECT vwap FROM 'market_price' WHERE pair = ? ORDER BY startTime DESC LIMIT 0, 1";
    var parameters = ["ETH/USD"];
    database.all(sqlQuery, parameters, (err, row) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        let data = row[0];
        res.json({"pair": "ETH/USD", "vwap": data["vwap"]});
    });

}

module.exports.fetchRecentETHGBPPrice = async (req, res) => {
    var sqlQuery = "SELECT vwap FROM 'market_price' WHERE pair = ? ORDER BY startTime DESC LIMIT 0, 1";
    var parameters = ["ETH/GBP"];
    database.all(sqlQuery, parameters, (err, row) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        let data = row[0];
        res.json({"pair": "ETH/GBP", "vwap": data["vwap"]});
    });

}

