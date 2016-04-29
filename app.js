const express = require('express'),
  port = 3000;

var app = express();

app.listen(port);

app.get('/', (req, res) => {
  res.json({name: 'Klaus'});
});
