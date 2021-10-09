(function ($) {
	'use strict'
	
	//acive menu
	$(document).ready(function() {
		$('#menu').onePageNav({
			currentClass: 'current_active',
			changeHash: true,
			scrollSpeed: 0,
			scrollThreshold: .50,
			filter: ':not(.external)',
			
			begin: function() {
				//I get fired when the animation is starting
				$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
			},
			end: function() {
				//I get fired when the animation is 
				$('#device-dummy').remove();
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});
	});

	//skill
	$('.skill-per').each(function(){
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width",per+'%');
	});

	//menu
	$('#menu_ico').on('click', function(){
		$('.menu_icon').toggleClass( "change" );
		$('.menu').slideToggle();
	})

	//resize
	$(window).resize(function(){
		var screenSize = $(window).width();
		if (screenSize > 991) {
			$('.menu').removeAttr('style');
			$('.menu_icon').removeClass( "change" );
		}
	});

	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();

		if (scroll > 70){
			$("header").addClass('sticky');
		}else{
			$("header").removeClass('sticky');
		}

		if (scroll > 400){
			$('#top').addClass("back");
		}else{
			$('#top').removeClass('back')
		}
	});

	//top button
	$('#top').on('click', function(){
		$(window).scrollTop(0)
	});


	// wow js for animaton
	var wow = new WOW({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         false,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: true,    // optional scroll container selector, otherwise use window,
		resetAnimation: true,     // reset animation on end (default is true)
	}
	);
	wow.init();
	//wow end

	var typed3 = new Typed('#typed3', {
		strings: ['Android developer', 'UI/UX Designer', 'Mobile App Development', 'Apk Builder'],
		typeSpeed: 100,
		backSpeed: 25,
		smartBackspace: true, // this is a default
		loop: true
	});

	//filte button

	
})

