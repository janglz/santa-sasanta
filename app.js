
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname, 'dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 1337);
