$('.hamburger').click(function () {
	$('.hamburger').toggleClass('is-active');
	$('.menu').animate({height: 'toggle'},'fast');
})