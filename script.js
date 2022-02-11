$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
});

function TextRandomAnimeControl() {
	$('.biograhy').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appearRandomtext");

		} else {
			$(this).removeClass("appearRandomtext");
		}
	});
}

$(window).scroll(function () {
	TextRandomAnimeControl();
});


$(window).on('load', function () {
	var element = $(".biograhy");
	element.each(function () {
		var text = $(this).text();
		var textbox = '';
		text.split('').forEach(function (t) {
			textbox += '<span>' + t + '</span>';
		});
		$(this).html(textbox);
	});

	TextRandomAnimeControl();
});
