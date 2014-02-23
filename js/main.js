$('document').ready(function() {
  var logo = $('#logo');
  logo.addClass('fadeIn').parent();

  setTimeout(function(){
    logo.removeClass('fadeIn').parent().addClass('grow').mouseover(function (){
      $(this).removeClass('fadeIn').addClass('grow'); 
    });
  },1500);
});