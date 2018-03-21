$(document).ready(function() {
    if ($("#newsletter")) {
        $('#mc-embedded-subscribe').on('click', function() {
            setTimeout(function() {
                $('#mce-success-response').hide();
                $('#mce-error-response').hide();
            }, 5000);
        });
    }
});
