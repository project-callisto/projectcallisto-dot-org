$(document).ready(function() {
    if($(".foli1")) {
	$(".demo-checkbox").hide();
	$(".newsletter-checkbox").hide();

	$('select[name="Field1"]').change(function() {
	    if ($(this).val() == "A potential campus partner") {
		$(".demo-checkbox").show();
		$(".newsletter-checkbox").hide();
	    } else {
		$(".demo-checkbox").hide();
		$(".newsletter-checkbox").show();
	    }
	});
    }
});

