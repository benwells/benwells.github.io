var lib = {
  init_animations_url: function (urlPattern) {
    var path = window.location.href.replace('http://benwells.github.io','').replace('http://localhost:4000',''),
        logo;

    if (urlPattern == path) {
      logo = $('#logo').addClass('fadeIn');

      setTimeout(function(){
        logo.removeClass('fadeIn').parent().addClass('grow').mouseover(function (){
          $(this).removeClass('fadeIn').addClass('grow'); 
        });
      }, 1500);
    }
  }
};

$('document').ready(function() {
  lib.init_animations_url('/');
});