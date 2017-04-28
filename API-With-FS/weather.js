var request = require('request');
var fs = require('fs');
var weatherArg = process.argv[2];


console.log("Inputed parameter is =>", weatherArg);

// function testing(data){
//   console.log(data + "is amazing");
// };
//
// testing(weatherArg);

var getWeather = function(location, callback) {

  console.log('Looking up ', location);

  var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u="c" AND woeid in (select woeid from geo.places(1) where text="'+ location +'")&format=json';

  request(url, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (response.statusCode === 200) {
      callback(body);
    } else {
      console.log("this is the error",error);

    }
  });
}



var saveData = function(data){
  console.log("we are trying to save this ",data);
  console.log(data.channel.location.city);
  var city = data.channel.location.city;
  fs.writeFile( 'data/' + city + '.json', JSON.stringify(data), function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Success file has been saved!");

    };
  });
}



// this invokes the API call,


var lookup = function(input){
  fs.readdir('data', function(err, files) {
    console.log(files);
    for(var i = 0; i < files.length; i++){
      console.log(files[i].toLowerCase().split('.')[0]);

      // var name = files[i].toLowerCase().split('.')[0];

      if(input.toLowerCase() === files[i].toLowerCase().split('.')[0] ){
        console.log('I already have data for this file');
        // go read the file
        readFile(input);
        return;
      } else {
        console.log(' I dont have data for this location');
        // go to API and save to data
        getWeather(input, function(data){
          // console.log('Done', JSON.parse(data));
          var weatherData = JSON.parse(data);
          // console.log(weatherData.query.results);
          saveData(weatherData.query.results);
          // console.log(weatherData.query.results.channel.location.city)
        });
      }
    }
})
}

lookup(weatherArg)

var readFile = function(stuff){
	console.log('File read!');
    // console.log(stuff);'
        fs.readFile('data/' + stuff + '.json', 'utf8', function(err, info){
    	if (err) {
    		return console.log(err);
    	} else {
    		console.log('Im a BADA55' + info);
    	}
    })
}


//If the input in Node CLI is Berlin, do not call API.
//Read JSON file.
//Return data in console.
