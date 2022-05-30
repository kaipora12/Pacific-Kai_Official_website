function delayScrollAnime() {
	var time = 0.2;
	var value = time;
	$('.top-topics, .second-topics, .third-topics, .forth-topics').each(function () {
		var parent = this;
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {
					
					$(parent).addClass("play");
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");
					value = value + time;
					
					
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");
			value = time;
		}
	})
}

	$(window).scroll(function (){
		delayScrollAnime();
	});

	$(window).on('load', function(){
		delayScrollAnime();
	});

	function TextRandomAnimeControl() {
		$('.info,.detail').each(function () {
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
		var element = $(".info,.detail");
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