$(document).ready(function () {
    'use strict';
    
//	Preloader
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});
	
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('bi-list bi-x-lg');
    });
	
// Sidebar Toggle
	$('.toggle-sidebar').click(function() {
		$('.main-sidebar').toggleClass('active');
		$('.sidebar-backdrop').fadeToggle();
	});
	$('.sidebar-backdrop').click(function() {
		$('.main-sidebar').removeClass('active');
		$('.sidebar-backdrop').fadeOut();
	})
	
// sidebar sub menu
	$('.sidebar .sidebar-list .list-item > a').click(function() {
		$(this).next('.sidebar .sidebar-list .sub-menu').slideToggle();
	})
    
    
//    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
//        animateOut: "slideOutDown",
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive : {
            0 : {
                mouseDrag: true
            },
            768 : {
                mouseDrag: false
            }
        }
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
    
//    units slider
    $(".units-slider .uslides").owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: false,
        active: true,
        margin: 20,
        smartSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    $(".units-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".units-slider .uslides").trigger("next.owl.carousel");
    });
    $(".units-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".units-slider .uslides").trigger("prev.owl.carousel");
    });
    
//    clients slider
    $(".clients-section .clients-slider").owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: false,
        active: true,
        margin: 30,
        smartSpeed: 1500,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive : {
            0 : {
                items: 3,
            },
            768 : {
                items: 4,
            },
            992 : {
                items: 6,
            }
        }
    });
    
    
});

