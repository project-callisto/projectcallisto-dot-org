$(document).ready(function() {
  $('.navbar-toggle').click(function() {
    $('body').toggleClass('locked');
  });

  const path = window.location.pathname;
  if (path === '/what-we-do') {
    $('#wwdNavItem').addClass('active-link');
  } else if (path === '/who-we-are') {
    $('#wwaNavItem').addClass('active-link');
  } else if (path === '/work-with-us') {
    $('#carNavItem').addClass('active-link');
  } else if (path === '/contact-us') {
    $('#contNavItem').addClass('active-link');
    $('#contNavItemBold').addClass('active-link-bold');
  } else if (path === '/login') {
    $('#loginNavItemBold').addClass('active-link-bold');
  } else if (path === '/donate') {
    $('#donNavItem').addClass('active-link');
  }
});
