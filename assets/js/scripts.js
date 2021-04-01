(function() {
	$(document).on('click', 'header button', function() {
		$('.st-container').addClass('st-menu-open');
	});

	$(document).on('click', '.st-menu-open .st-pusher', function() {
		$('.st-container').removeClass('st-menu-open');
	});

	var $desktopNavList = $('nav.desktop ul li');
	var $mobileNav = $('nav.mobile ul');

	$(window).on('resize', function() {
		if ($(window).width() >= 768 && $('#st-container').hasClass('st-menu-open')) {
			$('.st-container').removeClass('st-menu-open');
		}
	});

	function scrollTo(selector, offset) {
		var target = $(selector);
		// console.log(target);

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
				// location.hash = "pizza";
				// $('body').toggleClass(randomClassGen);
			}
		}



	});

	var $contactForm = $("#contactForm");

	function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}

	function setPlaceholder(number) {
		var formName = document.querySelector(".formName");
		var formEmail = document.querySelector(".formEmail");
		var formMessage = document.querySelector(".formMessage");

		formName.placeholder = placeholderEasterEgg[number].name;
		formEmail.placeholder = placeholderEasterEgg[number].email;
		formMessage.placeholder = placeholderEasterEgg[number].message;
	}

	var placeholderEasterEgg = [
		{
			name: "Jack Burton",
			email: "jburton@porkchopexpress.com",
			message: "The check is in the mail."
		},
		{
			name: "James Dalton",
			email: "jdalton@doubledeuce.com",
			message: "I want you to be nice until it's time to not be nice."
		},
		{
			name: "Johnny Utah",
			email: "jutah@fbi.gov",
			message: "You're sayin' the FBI's gonna pay me to learn to surf?"
		},
		{
			name: "R.J. MacReady",
			email: "rj.macready@usap.gov",
			message: "Someone in this camp ain't who what he appears to be."
		}
	]

	if ( $contactForm.length ) {
		setPlaceholder( getRandomInt( placeholderEasterEgg.length ) );
	}

	$(document).on('mouseover', '.js-list', function() {
		var list = $(this).next('span').data('list');
		// console.log(list);
	});


	console.log("Thanks for checking out my site! 🍕");

	// ...
})();
