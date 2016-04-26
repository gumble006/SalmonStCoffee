// $(document).ready(function(){

// $('a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }

// });





// };

$(document).ready(function(){	
	$('#backtotop').click(function() {
		console.log('run.');
		$('html, body').animate({scrollTop:0}, 'medium');
	});
});