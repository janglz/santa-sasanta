
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dist/santa-sasanta'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/santa-sasanta/index.html'));
});

app.listen(process.env.PORT || 1337, '0.0.0.0', () => console.log('working'));
