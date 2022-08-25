//import express
var express = require("express");
var app = express();
//import api router
const apiRoutes = require("./routes/apiRoute.js");


//server port
var PORT = 3000;

// start express server
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

//application root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

//routes
app.use("/api", apiRoutes);

//default API response to invalid URL
app.use(function(req, res){
    return res.status(404).json({error: "URL not found"});
});