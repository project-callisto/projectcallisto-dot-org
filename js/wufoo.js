$(document).ready(function() {
  $('#bars').click(function() {
    $('#bottomNav').slideToggle(300);
  });

    if ($(".foli1")) {
        // Setup checkboxes (hide them)
        $(".demo-checkbox").hide();
        $(".newsletter-checkbox").hide();

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
