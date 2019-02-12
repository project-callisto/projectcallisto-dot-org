$(document).ready(function() {
  $('#suggestButton').click(function() {
    $('#modalWrapper').toggleFade(300);
    $('#modalTitle').text('SUGGEST AN INSTITUTION');
  });
  $('#mailingListButton').click(function() {
    $('#modalWrapper').toggleFade(300);
    $('#modalTitle').text('JOIN OUR CALLISTO EXPANSION WAITINGLIST');
  });
  $('#modalClose').click(function() {
    $('#modalWrapper').toggleFade(300);
  })
});
