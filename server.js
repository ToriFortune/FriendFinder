const express = require("express");
const app = express ();
const PORT = process.env.PORT ||3000;

// var path = require ("path");

// var app =express();

// var port = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log ("We are in!")
  });