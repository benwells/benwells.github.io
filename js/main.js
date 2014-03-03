var lib = {
  init_animations_url: function (urlPattern) {
    var path = window.location.href.replace('http://benwells.github.io','').replace('http://localhost:4000',''),
        logo;

    if (urlPattern == path) {
      logo = $('#logo').addClass('fadeIn');

      setTimeout(function(){
        logo.removeClass('fadeIn').parent().addClass('grow');
      }, 1500);
    }
  },
  nav_pill_click_handler: function () {
    $('#navPills').find('a').click(function (e) {
      var t    = this,
          href = t.href;

      e.preventDefault();
      $(t).parent().parent().addClass('fadeOut');

      //setTimeout to wait for fade out animation to complete before changing pages
      setTimeout(function (){
        window.location = href;
      }, 200);
    });  
  },
  register_media_hover: function () {
    $('li.media').hover(function(){ 
      $('small, h4', this).toggleClass('bold');
    });
  }
};

$('document').ready(function() {
  lib.init_animations_url('/');
  lib.nav_pill_click_handler();
  lib.register_media_hover();
});