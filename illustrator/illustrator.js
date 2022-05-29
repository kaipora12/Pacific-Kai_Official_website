function TextRandomAnimeControl() {
	$('.h5').each(function () {
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
	var element = $(".h5");
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

