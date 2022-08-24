var database = require("../database/database.js");

module.exports.fetchRecentETHUSDPrice = async (req, res) => {
    var sqlQuery = "SELECT vwap FROM market_price ORDER BY startTime DESC LIMIT 0, 1";
    var parameters = [];
    database.all(sqlQuery, parameters, (err, row) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        let data = row[0];
        res.json({"pair": "ETH/USD", "vwap": data["vwap"]});
    });

}