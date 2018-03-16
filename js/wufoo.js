
$(document).ready(function() {
    if($(".foli1")) {
	// Setup checkboxes (hide them)
	$(".demo-checkbox").hide();
	$(".newsletter-checkbox").hide();

	// Disable all inputs until user selects who they are:
	$("#become-partner :input").prop("disabled", true);
	// Enable first dropdown:
	$("#foli1 :input").prop("disabled", false);
	$("#foli218 :input").prop("disabled", false);

	// Show demo on campus partners, hide on all else.
	$('select[name="Field1"]').change(function() {
	    $("#become-partner :input").prop("disabled", false);
	    if ($(this).val() == "A potential campus partner") {
		$(".demo-checkbox").show();
		$(".newsletter-checkbox").show();
	    } else {
		$(".demo-checkbox").hide();
		$(".newsletter-checkbox").show();
	    }
	});
    }
});

