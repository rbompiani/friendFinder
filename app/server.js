// --------- DEPENDENCIES ------------//
var express = require("express");
var path = require("path");
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes')

var app = express();
app.listen(3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route html requests
htmlRoutes(app, path);

// route api requests
apiRoutes(app, path);