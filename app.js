var express = require("express");
var app = express();
var exphbs = require('express-handlebars');
var $ = require("jquery");
var webpack = require("webpack");
app.use(express.static("public"));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get("/", function(req, res, next) {
    res.render("homew");
});
app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("app had listen");
});