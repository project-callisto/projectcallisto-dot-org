
$(document).ready(function() {
    if($(".thank-you-toast")) {
	if(window.location.hash) {
	    $(".thank-you-toast").show().css('display', 'flex');
	}
    }
});
