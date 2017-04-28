var app = {
	init: function(){
		console.log('Hello');	
		app.bindevent();
	},

	bindevent: function(){
		$('.submitBtn').click(function(e){
			e.preventDefault(); 
			console.log('How old are ye?');
			app.dateData();
		});
	},
	dateData: function(){
		console.log($('.day').val());
		console.log($('.month').val());
		console.log($('.year').val());

		var dateEntered = true;
		if($('.day').val() === '-1'){
			// alert('Enter date');
			dateEntered = false;
			alert('Please enter a day');
			console.log(dateEntered);
		} else if($('.month').val() === '-1') {
			//pelas enter date!
            dateEntered = false;
            alert('Please enter a month');
            console.log('Aw yeah');
		} else if ($('.year').val() === '-1'){
			dateEntered = false;
			alert('Please enter a year');
			console.log('Righteous')
		} else {
			console.log('Algebraic');
			app.bouncer();
		}

	},
	bouncer: function(){
		console.log('whaaattttt');

        var year = $('.year').val();

        console.log(year );

        if ( year >= 1999 ) {
          console.log('Get outta here, punk');
          $( '.wrapper' ).css('background-image', 'url(images/explosion.gif)');
        } else {
          console.log('Come on in.');
          $( '.wrapper' ).css('background-image', 'url(images/wormhole.gif)');
        }
	}
}

window.onload = app.init;