$(document).ready(function() {
    if($(".foli1")) {
	// Setup checkboxes (hide them)
	$(".demo-checkbox").hide();
	$(".newsletter-checkbox").hide();

	// Disable all inputs until user selects who they are:
	$("#become-partner :input").prop("disabled", true);
	// Enable first dropdown:
	$("#foli1 :input").prop("disabled", false);
	$("#foli2 :input").prop("disabled", false);

	// Show demo on campus partners, hide on all else.
	// Newsletter is inverse to campus partner.
	$('select[name="Field1"]').change(function() {
	    $("#become-partner :input").prop("disabled", false);
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

