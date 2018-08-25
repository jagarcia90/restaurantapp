var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var PORT = 7000;
app.get("/", function (req, res) {
    res.end();
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});