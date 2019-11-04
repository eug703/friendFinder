var express = require("express");
var path = require("path");

var app = express();
var Port = process.env.PORT || 3030

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(Port, function(){
    console.log(`App is listening on Port ${Port}`)
})