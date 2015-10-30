/*

-- Index --
00. PARALLAX SETTING
01. NAVBAR STICKY + SELECTED
02. SMOOTH SCROLLING OF NAV BAR
03. HEADER + H2 TEXT
04. WORKS SLIDER EXEMPLE
05. SKILLS SLIDER
06. RESPONSIVE MENU
07. ANNIMATIONS MAKE IT APPEAR
08. MIXITUP PORTFOLIO FILTER
09. SKILLS BAR
10. SUPPORT
11. LOADING PAGE

*/



$(document).ready(function () {


/*-----------------------------------------------------------------------------------*/
/*	00. PARALLAX SETTING
/*-----------------------------------------------------------------------------------*/

	mediaCheck({
		media: '(max-width: 768px)',
		entry: function() {
			// NONE FOR DISABLE PARALLAX SCROLLING IN SMARTHPHONES & TABLET
		},
		exit: function() {
			//.parallax(xPosition, speedFactor, outerHeight) options:
			//xPosition - Horizontal position of the element
			//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
			//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
			$('#cbp-bislideshow li').parallax("center", -0.6, true);
			$('#contact_intersection').parallax("center", 0.1, true);
		}
	});



/*-----------------------------------------------------------------------------------*/
/*	01. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/

	var cbpAnimatedHeader = (function() {

		var docElem = document.documentElement,
			header = document.querySelector( '.cbp-af-header' ),
			didScroll = false,
			changeHeaderOn = 250;

		function init() {
			window.addEventListener( 'scroll', function( event ) {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 100 );
				}
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				classie.add( header, 'cbp-af-header-shrink' );   
			}
			else {
				classie.remove( header, 'cbp-af-header-shrink' );   
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();

	var sections = $("section");
	var navigation_links = $("nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '30%'
	});



/*-----------------------------------------------------------------------------------*/
/*	02. SMOOTH SCROLLING OF NAV BAR
/*-----------------------------------------------------------------------------------*/

	$('.goto').click(function(e){
	    $('html,body').scrollTo(this.hash,this.hash);
	    e.preventDefault();
	});



/*-----------------------------------------------------------------------------------*/
/*	03. HEADER + H2 TEXT
/*-----------------------------------------------------------------------------------*/

	$(function () {
	    cbpBGSlideshow.init();
	});



/*-----------------------------------------------------------------------------------*/
/*	04. PORTFOLIO SLIDER EXEMPLE 
/*-----------------------------------------------------------------------------------*/

    $(".exemple_slider").owlCarousel({
        autoPlay: true,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });



/*-----------------------------------------------------------------------------------*/
/*	05. SKILLS SLIDER
/*-----------------------------------------------------------------------------------*/

    $('#skills-slider').liquidSlider({
        autoHeight: true,
        slideEaseFunction: 'animate.css',
        slideEaseDuration: 500,
        heightEaseDuration: 500,
        animateIn: "fadeInDown",
        animateOut: "fadeOutUp",
    });



/*-----------------------------------------------------------------------------------*/
/*	06. RESPONSIVE MENU
/*-----------------------------------------------------------------------------------*/

	$("#collapse").hide();
	$("#collapse-menu").on("click", function () {
	    $("#collapse").slideToggle(300);
	    return false;
	}, function () {
	    $("#collapse").slideToggle(300);
	    return false;
	});

	// Menu Slide-up after click
	$(".nav-mobile li").click(function() {
		$("#collapse").slideToggle(300);
	    //return false;
	});


/*-----------------------------------------------------------------------------------*/
/*	07. ANNIMATIONS MAKE IT APPEAR
/*-----------------------------------------------------------------------------------*/

	$('.make-it-appear-top').waypoint(function(direction) {
	  $(this).addClass('animated fadeInDown');
	}, {
	  offset: '80%'
	});

	$('.make-it-appear-left').waypoint(function(direction) {
	  $(this).addClass('animated fadeInLeft');
	}, {
	  offset: '80%'
	});

	$('.make-it-appear-right').waypoint(function(direction) {
	  $(this).addClass('animated fadeInRight');
	}, {
	  offset: '80%'
	});

	$('.make-it-appear-bottom').waypoint(function(direction) {
	  $(this).addClass('animated fadeInUp');
	}, {
	  offset: '80%'
	});

	$('.bounce').waypoint(function(direction) {
	  $(this).addClass('animated bounce');
	}, {
	  offset: '70%'
	});

	$('.pulse').waypoint(function(direction) {
	  $(this).addClass('animated pulse');
	}, {
	  offset: '50%'
	});



/*-----------------------------------------------------------------------------------*/
/*	08. MIXITUP PORTFOLIO FILTER
/*-----------------------------------------------------------------------------------*/

	$('#item-list').mixitup({
		targetSelector: '.mix',
		filterSelector: '.filter',
		//effects: ['fade'],
		easing: 'snap',
	});
	
	/*filter selected*/
	$('.filter-btn').click(function(){
		$('.filter-list').find('.filter-selected').removeClass('filter-selected');
		$(this).addClass('filter-selected');
	});



/*-----------------------------------------------------------------------------------*/
/*	09. SKILLS BAR
/*-----------------------------------------------------------------------------------*/

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},3000);
	});



/*-----------------------------------------------------------------------------------*/
/*	10. SUPPORT
/*-----------------------------------------------------------------------------------*/

	var count = 1;
	$("#support_button").click(function() {
		$.ajax ({
			type: "POST",
			url: "./support/support_count.php",
			data: "count="+count,
			cache: false,
			success: function(html) {
				$("#support_count").html(html);
				count += 1;
			} 
		});
	});



/*-----------------------------------------------------------------------------------*/
/*	11. LOADING PAGE
/*-----------------------------------------------------------------------------------*/

	$(window).load(function() {
		// will first fade out the loading animation
	    //$("#loading-animation").fadeOut();
		// will fade out the whole DIV that covers the website.
	    //$("#preloader").delay(300).fadeOut("slow");
	    $("#cbp-bislideshow").fadeIn();
	});


}); // END OF DOCUMENT READY



