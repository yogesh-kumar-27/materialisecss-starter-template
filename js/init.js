(function ($) {
  $(function () {
    $(".sidenav").sidenav();

    //Init Slider

    $(".slider").slider({
      fullWidth: true,
      indicators: false,
      height: 500
    });
    // parallax
    $('.parallax').parallax();

    //Init Scrollspy
    $(".scrollspy").scrollSpy({});
  }); // end of document ready
})(jQuery); // end of jQuery name space