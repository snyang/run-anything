const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, 'index.html'));
});

app.listen(9000);