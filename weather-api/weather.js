var request = require('request');
var weatherObj;
//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u=%27c%27%20AND%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%27London%27)&format=json

var getWeather = function(location, callback) {
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u="c" AND woeid in (select woeid from geo.places(1) where text="'+ location +'")&format=json';

  request(url, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    // body is returned as string!
    //convert body to JSON!!
    var data = JSON.parse(body);

    weatherObj = {
      status:'OK',
      temp: data.query.results.channel.item.condition.temp,
      high: data.query.results.channel.item.forecast[0].high,
      low: data.query.results.channel.item.forecast[0].low,
      text: data.query.results.channel.item.condition.text,
    };

    if (weatherObj.results === null) {
      weatherObj.status = 'NO';
      console.log(error);
    } else {
      callback(weatherObj);
      console.log("this is from weather js ", weatherObj);
    }

    // if resulst is null


    // send an object that has an error
    //else
    // send weatherobj





    // return only current temperature
    // someArray[0] = data.query.results.channel.item.condition.temp;
    // someArray[1]  = data.query.results.channel.item.forecast[0].high;
    // someArray[2] = data.query.results.channel.item.forecast[0].low;
    // someArray[3] = data.query.results.channel.item.condition.text;
    // callback(data.query.results.channel.item.condition.temp);

    // console.log(hotCold, high, low, skies);
  });
};

module.exports = getWeather;
