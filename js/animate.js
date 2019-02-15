$(document).ready(function() {
  $("#cxSectionAnimate").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      });
    }
  });

  $("#cxSectionAnimate2").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      });
    }
  });

  $("#ccSectionAnimate").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      });
    }
  });

  const path = window.location.pathname;
  console.log(path);
  if (path === '/what-we-do') {
    $('#wwdNavItem').addClass('active-link');
  } else if (path === '/who-we-are') {
    $('#wwaNavItem').addClass('active-link');
  } else if (path === '/work-with-us') {
    $('#carNavItem').addClass('active-link');
  } else if (path === '/contact-us') {
    $('#contNavItem').addClass('active-link');
    $('#contNavItemBold').addClass('active-link-bold');
  } else if (path === '/donate') {
    $('#donNavItem').addClass('active-link');
  }
});
