$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() + $('#footer').height() + 130 >= $(document).height()) {
    if ($(window).width() > 994) {
      var dif = $(document).height() - ($(window).scrollTop() + $(window).height());
      dif = $('.footer').height() + 130 - dif;
      $('#sgBottomNav').css('bottom', `${dif}px`);
    }
  } else {
    $('#sgBottomNav').css('bottom', '0');
  }
  if ($(window).scrollTop() === 0) {
    $('.scrollSignifier').fadeIn(200);
  } else {
    $('.scrollSignifier').fadeOut(200);
  }
});
// (っ◕‿◕)っ
