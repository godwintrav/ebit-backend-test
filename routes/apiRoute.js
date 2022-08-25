//import Router from express
const { Router } = require('express');
const router = Router();
//import api controller
const apiController = require("../controllers/apiController.js");

//connect all api routes to their respective controller functions
router.get("/fx/ohlc/ETHUSD", apiController.fetchRecentETHUSDPrice);
router.get("/fx/ohlc/ETHGBP", apiController.fetchRecentETHGBPPrice);
router.get("/fx/ohlc/ETHUSD/history", apiController.fetchHighAndLowPricesETHUSD);
router.get("/fx/ohlc/ETHGBP/history", apiController.fetchHighAndLowPricesETHGBP);

//export router
module.exports = router;