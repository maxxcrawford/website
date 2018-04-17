(function () {
    // all your code here
  var navLoad = function (target) {
		// console.log( target );
    //
    // console.log( target.attr('href') );

		var navItems = $('header nav a');
    var navToggle = $('header nav button');
    var navTarget = target.attr('href');

		navItems.removeClass('active');
		target.addClass('active');

    // $('body').addClass('loading');

    setTimeout(function () {
      $('main section').removeClass('active');
      $(navTarget).addClass('active');
    }, 1000);

    setTimeout(function () {
      navToggle.trigger('click');
    }, 500);



    // setTimeout(function () {
    //   $('body').removeClass('loading');
    //
    // }, 2000);

    // console.log( $(navTarget) );




  };

  $(document).on('click', 'header nav a', function(e){
    e.preventDefault();
		navLoad( $(this) );
	});

  $(document).on('click', 'header nav button', function(){
		$(this).toggleClass('active');
	});

$(window).on('load', function(){
  var $headerTitle = $('header h1');
  var headerTitleText = $headerTitle.text();
  headerTitleText = headerTitleText.replace(/.$/,"Đ");
  $headerTitle.text(headerTitleText);
});

function scrollTo(selector, offset){
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

$(document).on('click', '.js-top', function(){
  scrollTo('body');
});





    // ...
})();
