var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
//var db = require("./models");

var port = process.env.PORT || 8080;


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use(express.static("/public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs ({defaultlayout: "mai"}));
app.set("view engine", "handlebars");


mongoose.connect("mongodb://localhost/News_Scraper");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log("Connected to Mongoose");
});


app.listen(port, function() {
    
    console.log("Listening on Port" + port);   

});

