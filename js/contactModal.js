$(document).ready(function() {
  $('#suggestButton').click(function() {
    $('#modalWrapper').fadeToggle(100);
    $('#modalTitle').text('SUGGEST AN INSTITUTION');
  });
  $('#mailingListButton').click(function() {
    $('#modalWrapper').fadeToggle(100);
    $('#modalTitle').text('JOIN OUR CALLISTO EXPANSION WAITINGLIST');
  });
  $('#modalClose').click(function() {
    $('#modalWrapper').fadeToggle(100);
  })
});
