//SLIDER


$(document).ready(function () {


	$('.radio-buttons > a').on('click', function () {

		$('.activeR').removeClass('activeR');
		$(this).addClass('activeR');


	});


	var slideWrap = $('.slider-wrapper');

	$('#btn1').on('click', function (e) {
		e.preventDefault();


		slideWrap.animate({
			left: '0px',
		}, 500);

	});


	$('#btn2').on('click', function (e) {
		e.preventDefault();


		slideWrap.animate({
			left: '-600px',
		}, 500);

	});

	$('#btn3').on('click', function (e) {
		e.preventDefault();


		slideWrap.animate({
			left: '-1200px',
		}, 500);

	});


	//SLIDER INTERVAL

	var index = 0;

	var inter = setInterval(function () {


		$('.activeR').removeClass('activeR').next().addClass('activeR');


		if (index === 2) {
			slideWrap.animate({
				left: '0px',
			}, 500);

			index = 0;
			$('.radio-buttons > a').eq(0).addClass('activeR');
		} else {

			slideWrap.animate({
				left: '-=600px',
			}, 500);

			index++;
		}

		
	}, 5000);


});





$(window).on("scroll",function(){


	var elDistTop = $("#navbar2").offset().top,
	    winDistTop = $(window).scrollTop();
     	


	    if(winDistTop > 680){
	    	$("#navbar2").addClass("navbar-fixed-top");

	    } else{
	    	$("#navbar2").removeClass("navbar-fixed-top");
	    }

	    if(winDistTop > 0){
	    	$("#nav1").fadeOut(1000);

	    } else{
	    	$("#nav1").fadeIn(1000);
	    }
	    


});