var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var app        = express();
var port       = process.env.PORT || 3000;

var weatherApi = require('./weather.js');

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


// this is only to server the page
app.get('/', function(req, res) {
  res.render('index');
  // req.body.name = 'London'

  // weatherApi(req.body.name, function(ldnWeather){
  // 	console.log(">>>",ldnWeather);
  // });

});


// this is only to serve data 
app.post('/query/', function(req, res) {
  console.log(req.body.name);
  weatherApi(req.body.name, function(weatherID){
    console.log('result is', weatherID);
    if(weatherID.status == 'OK'){
      res.send({data: weatherID});
    } else {res.send({data: 'error'});
  }

  

});
});

app.listen(port, () => console.log('Express is up and running'));
