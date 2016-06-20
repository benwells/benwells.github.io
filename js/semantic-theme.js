(function($) {
  // silky scroll
  $('a.silky-scroll').on('click', function() {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 400);
    return false;
  });

})(jQuery);
