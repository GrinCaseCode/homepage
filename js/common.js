$(document).ready(function() {


//прилипающие меню
var $menu = $("#menu");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 600 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 600 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(600);
		} else {
			$(".menu").slideUp(600);
		}
		
	});

	$(".menu a").click(function() {
			$(".menu").slideUp(600);
			$(".sandwich").removeClass("active");
		});

	//слайдер

	$('.slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});