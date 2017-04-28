var express = require('express');
var morgan  = require('morgan');
var app     = express();
var port    = process.env.PORT || 3000;

app.use(express.static('views'));
app.use(morgan('dev'));

app.get('/', function(req, res){
  console.log('Helloa');
  res.render('index');
})

app.listen(port, () => console.log('Express is up and running'));
