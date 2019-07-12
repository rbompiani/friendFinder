// --------- DEPENDENCIES ------------//
var express = require("express");
var path = require("path");
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes')

var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route html requests
htmlRoutes(app, path);

// route api requests
apiRoutes(app, path);