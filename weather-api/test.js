var request = require('request');

var getWeather = function(location, callback) {
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u="c" AND woeid in (select woeid from geo.places(1) where text="'+ location +'")&format=json';

  request(url, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the
  //  response status code if a response was received

    if(response.statusCode === 200){
      callback(body);
    } else {
      console.log('some error has occured');
    }
     // Print the HTML for the Google homepage.
  });
};

getWeather('London', function(data){
  console.log('callback');
  console.log(typeof JSON.parse(data));
  var value = JSON.parse(data);
  console.log(JSON.stringify(value));
  if(value.query.results === null){
    console.log('some error message to the user ')
  } else {
    console.log('result!', value.query.results)
  }

});




// var sayHello = function(name, callback){
//   callback('Hello ' + name + ' !');
// };
//
// sayHello('Sharon', function(data){
//   console.log(data);
// });
