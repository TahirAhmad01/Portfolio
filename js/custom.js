
(function ($) {
	'use strict'


	$('#menu_ico').on('click', function(){
		$('.menu_icon').toggleClass( "change" );
		$('.menu').slideToggle();
	})

	
	$(window).resize(function(){
		var screenSize = $(window).width();
		if (screenSize > 991) {
			$('.menu').removeAttr('style');
			$('.menu_icon').removeClass( "change" );
		}
	});

	//scroll
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();

		if (scroll > 50){
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

	//wow js
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
    
    //skill
	$('.skill-per').each(function(){
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width",per+'%');
    });
    
    //text animation
    var typed3 = new Typed('#typed3', {
		strings: ['Android developer', 'UI/UX Designer', 'Mobile Apps Developer', 'Apps Designer'],
		typeSpeed: 100,
		backSpeed: 25,
		smartBackspace: true, // this is a default
		loop: true
	});

	//preloder
	$(window).on("load",function(){
	 	$(".loader-container").fadeOut(2500);
	 	$(window).scrollTop(0);
    });

	//read more
	$(".re_more").on("click", function() {
		$("#read_more").slideToggle();
		
		if($(this).text() == 'Read More'){
			$(this).text('Read Less')
		}else{
			$(this).text('Read More')
		};
	
	});
	

}) (jQuery);