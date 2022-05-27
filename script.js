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
	$('.news,.insta,.tweet, .paint, .programmer').each(function () {
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
	var element = $(".news,.insta,.tweet, .paint, .programmer");
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

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $("#container").toggleClass('mainblur');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $("#container").removeClass('mainblur');
});