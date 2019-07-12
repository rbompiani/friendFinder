// --------- DEPENDENCIES ------------//
var express = require("express");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes')

var app = express();
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route html requests
htmlRoutes(app, path);

// route api requests
apiRoutes(app, path);