(function() {
	$(document).on('click', 'header nav button', function() {
		$('.st-container').addClass('st-menu-open');
	});

	$(document).on('click', '.st-menu-open .st-pusher', function() {
		$('.st-container').removeClass('st-menu-open');
	});

	var $desktopNavList = $('nav.desktop ul li');
	var $mobileNav = $('nav.mobile ul');

	var cloneNav = function() {
		$desktopNavList.clone().appendTo($mobileNav);
	};

	$(window).on('load', function() {
		// var $headerTitle = $('header h1');
		// var headerTitleText = $headerTitle.text();
		// headerTitleText = headerTitleText.replace(/.$/, 'Đ');
		// $headerTitle.text(headerTitleText);
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

	function randomClassGen() {
		var classNum = Math.floor(Math.random() * 6) + 1;
		var className = 'gif-' + classNum;
		return className;
	}

	$('.js-gifToggle').on('click touchstart', function(e) {
		e.preventDefault();

		$('.js-gifToggle i').toggleClass('fa-toggle-off fa-toggle-on');

		if ($(this).hasClass('enabled')) {
			$(this).removeClass('enabled');
			$('body').attr('class', '');
		} else {
			$(this).addClass('enabled');




			var bodyClassCurr = $('body').attr('class').length;

			if (bodyClassCurr > 0) {
				$('body').attr('class', '');
			} else {
				$('body').toggleClass('gif-1');
				// $('body').toggleClass(randomClassGen);
			}
		}



	});

	$(document).on('mouseover', '.js-list', function() {
		var list = $(this).next('span').data('list');
		console.log(list);
	});

	// ...
})();
