(function () {
    // all your code here
  var navLoad = function () {
    $('body').addClass('loading');
    setTimeout(function () {
      $('body').removeClass('loading');
    }, 2000);
  };

  $(document).on('click', 'header nav a', navLoad);

    // ...
})();
