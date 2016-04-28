"use strict";

// Mobile navigation
$(document).ready(function(){

	$(function(){
		$('#drop-menu').slicknav();
	});

});


// Sticky 'Back to Top'
$(document).ready(function() {
	var stickyNavTop = $('#sticky-marker').offset().top;
	 
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		      
		if (scrollTop > stickyNavTop) { 
		    $('#backtotop').addClass('stuck');
		} else {
		    $('#backtotop').removeClass('stuck'); 
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
	    stickyNav();
	});

	$('#backtotop').click(function() {
		$('html, body').animate({scrollTop:0}, 'medium');
	});
});




