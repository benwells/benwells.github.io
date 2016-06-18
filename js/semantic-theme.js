function doItToIt() {
  console.log('fire');
  // $(this).transition('vertical flip', '500ms').hide()//.transition('vertical flip', '600ms')
  // $('.itembenn').transition('vertical flip', '500ms')//.transition('vertical flip', '600ms')
    // .on('mouseenter', doItToIt)
}

function leave() {
  $(this)
    .transition('vertical flip in').on('mouseenter', doItToIt)
}

(function($) {
  setTimeout(function() {
    // $('.ui.sidebar')
    // // .addClass('visible');
    // .transition('fly up');
    // $('.item').on(function(e) {
    //   console.log('hover');
    //   $(this).transition('vertical flip in').css('background', 'red');
    // },function(e) {
    //   $(this).transition('horizontal flip in').css('background', 'none');
    // });
    console.log('setTimeout');
    $('.itemben').on('mouseenter', doItToIt);
    // $('.item').on('mouseleave', leave);
  }, 500)
})(jQuery);
