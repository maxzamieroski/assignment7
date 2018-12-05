var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var Client = require('node-rest-client').Client;

var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;


app.get("/getFeedData", function (req, res) {
  var client = new Client();
  var url = req.query.url;
  client.get(url, function (data, response) {
    res.send(data);
  });
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
