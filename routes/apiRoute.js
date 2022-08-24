const { Router } = require('express');
const router = Router();
const apiController = require("../controllers/apiController.js");

router.get("/fx/ohlc/ETHUSD", apiController.fetchRecentETHUSDPrice);
router.get("/fx/ohlc/ETHGBP", apiController.fetchRecentETHGBPPrice);
router.get("/fx/ohlc/ETHUSD/history", apiController.fetchHighAndLowPricesETHUSD);

module.exports = router;