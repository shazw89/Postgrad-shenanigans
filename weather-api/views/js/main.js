var app = {
    init: function() {

       // When page loads, get initial weather for location. HINT: make location a property for the app object. 
       // app.initialWeather('London');
       // Call this bindEvents
       app.bindEvents();  
  },

    initialWeather: function(city){

        app.postAPI(city);
    },


  bindEvents: function() {
        // if i call a city X
        // i return value for X
        // hit api for X
        // save values for X
        // if user input = X
        // do not hit api
        // read X from saved value
        // if user input == X but its 1 hours later
        // hit Api for X
        // get updated information 


        $('.submitBtn').click(function(e){
            e.preventDefault();

            console.log('click', $('.weatherAt').val());



            if ($('.weatherAt').val() === '') {
                 alert('Enter a city to proceed');
             } else {
                 app.postAPI($('.weatherAt').val());
             }
        });


  //    var weatherInput = document.getElementById('weatherAt');

		// document.querySelector('form.search-weather').addEventListener('submit', function (e){
		// 	e.preventDefault();

		// 	console.log(weatherInput.value);

		// 	if (weatherInput.value === '') {
		// 		alert('Enter a city to proceed');
		// 	} else {
		// 	    app.postAPI(weatherInput.value);
		// 	}
		// });
	},
    postAPI: function(city){
       $.ajax({
                    method: 'POST',
                    url: 'http://localhost:3000/query/',
                    dataType: 'json',
                    data: {name: city}
                })
                .done(function(temp) {

                   if (temp.data.status === 'OK') {
                       app.displayData(temp.data);
                   } else {
                       console.log('Error');
                   }
                    
                });
    },

	displayData: function(temp){

        console.log(temp);

     	$('img').remove();

      	app.weatherImg(temp.text);

        $('#weather_text').text(temp.text);
        $('#high_temp').text(temp.high);
        $('#low_temp').text(temp.low);
        $('#current_temp').text(temp.temp)   
    },

    weatherImg: function (data){
      var conditions = $('#weather_text');
        switch (data) {
            case "Cloudy":
                conditions.after('<img src="../images/cloud.gif" class="skies">');
                break;
            case "Sunny":
				conditions.after('<img src="../images/sun.png" class="skies">');
    			break;
    		case "Rain":
    			conditions.after('<img src="../images/rain.png" class="skies">');
    			break;
    		case "Thunderstorms":
    			conditions.after('<img src="../images/storm.png" class="skies">');
    			break;
    		default:
    			conditions.after('<img src="../images/umbrella.png" class="skies">');
  		  }
  	}

}

window.onload = app.init;



