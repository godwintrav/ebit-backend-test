const { Router } = require('express');
const router = Router();
const apiController = require("../controllers/apiController.js");

router.get("/fx/ohlc/ETHUSD", apiController.fetchRecentETHUSDPrice);

module.exports = router;