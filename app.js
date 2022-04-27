const express = require("express");
const bodyParser = require("body-parser");
const homepage = require("./controller/homepage");
const about = require("./controller/about");
const newUser = require("./controller/newUser");
const storeUser = require("./controller/storeUser");

var app = express()

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", homepage);
app.get("/about", about);
app.get("/register", newUser);
app.post("/register", storeUser);

app.listen(3000, function(){
    console.log("The server is listening");
});