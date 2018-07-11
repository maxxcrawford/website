(function() {
	$(document).on('click', 'header nav button', function() {
		$('.st-container').addClass('st-menu-open');
	});

	$(document).on('click', '.st-menu-open .st-pusher', function() {
		$('.st-container').removeClass('st-menu-open');
	});

	var $desktopNavList = $('nav.desktop ul');
	var $mobileNav = $('nav.mobile ul');

	var cloneNav = function() {
		$desktopNavList.clone().appendTo($mobileNav);
	};

	$(window).on('load', function() {
		var $headerTitle = $('header h1');
		var headerTitleText = $headerTitle.text();
		headerTitleText = headerTitleText.replace(/.$/, 'Đ');
		$headerTitle.text(headerTitleText);
		cloneNav();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 768 && $('#st-container').hasClass('st-menu-open')) {
			$('.st-container').removeClass('st-menu-open');
		}
	});

	function scrollTo(selector, offset) {
		var target = $(selector);
		console.log(target);

		if (target.length) {
			var targetOffset = target.offset().top;
			// if (offset.length){
			// 	targetOffset = targetOffset - offset;
			// }
			$('html, body').animate({
				scrollTop: targetOffset
			}, 'slow');
		}
	}

	$(document).on('click', '.js-top', function() {
		scrollTo('body');
	});

	// ...
})();