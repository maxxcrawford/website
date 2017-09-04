(function () {
    // all your code here
  var navLoad = function (target) {
		console.log( target );

		var navItems = $('header nav a');
    var navToggle = $('header nav button');

		navItems.removeClass('active');
		target.addClass('active')

    $('body').addClass('loading');
    setTimeout(function () {
      $('body').removeClass('loading');
    }, 2000);
  };

  $(document).on('click', 'header nav a', function(){
		navLoad( $(this) );
	});

  $(document).on('click', 'header nav button', function(){
		$(this).toggleClass('active');
	});



    // ...
})();
